import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../../lib/firebase";
import { ResultDetails } from "../../../types/types";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../../context/AuthContext";
import { v4 as uuidv4 } from "uuid";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Rajah Tupas Medical Services
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Patient Information", "Confirm Results"];

const theme = createTheme();

export default function Release() {
  const { user } = useAuth();
  const [result, setResult] = useState<ResultDetails | null>(null);
  const { asPath } = useRouter();
  const id = asPath.split("/")[4];
  console.log(id);
  const [activeStep, setActiveStep] = React.useState(0);

  const [value, loading, error] = useDocument(doc(db, "appointments", id));

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  console.log(result);

  async function addDataToResults(id: string) {
    await setDoc(doc(db, "results", id), {
      ...result,
      appointmentId: id,
      patientId: value?.data()?.userId,
      serviceTitle: value?.data()?.serviceTitle,
      name: value?.data()?.firstName + value?.data()?.lastName,
      date: value?.data()?.date,
    });
    if (id !== null && value?.data()?.userId !== null) {
      //get current appointment array of target user
      const docRef = doc(db, "appointments", id);

      //change appointment status to complete
      await updateDoc(docRef, {
        status: "complete",
      });

      //UPDATE USER RESULTS ARRAY
      const userRef = doc(db, "users", value?.data()?.userId);
      const docSnapUser = await getDoc(userRef);
      await updateDoc(userRef, {
        results: [
          ...docSnapUser?.data()?.results,
          { 
            ...result, 
            appointmentId: id,
            patientId: value?.data()?.userId,
            serviceTitle: value?.data()?.serviceTitle,
            name: value?.data()?.firstName + " " + value?.data()?.lastName,
            date: value?.data()?.date,
          },
        ],
        appointments: docSnapUser
          ?.data()
          ?.appointments.filter((a: any) => a.appointmentId !== id),
      });
      handleNext();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Document: Loading...</span>}
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Rajah Tupas Medical Services
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Release Results for {value?.data()?.firstName}{" "}
            {value?.data()?.lastName}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Results Released
              </Typography>
              <Typography variant="subtitle1">
                Results released successfully for appointment{" "}
                {value?.data()?.appointmentId}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep == 0 && <AddressForm patientFunc={setResult} />}
              {activeStep == 1 && <Review />}

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep !== steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}
                {activeStep === steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={() =>
                      addDataToResults(value?.data()?.appointmentId)
                    }
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Confirm
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
