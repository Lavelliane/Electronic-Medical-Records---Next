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
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../../lib/firebase";
import { PatientDetails } from "../../../types/types";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from '../../../context/AuthContext';
import { uuid } from 'uuidv4';

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

const steps = ["Patient Information", "Payment details", "Review"];

const theme = createTheme();

export default function Checkout() {
 const {user} = useAuth()
  const [patient, setPatient] = useState<PatientDetails | null>(null);
  const { asPath } = useRouter();
  const id = asPath.split("/")[2];
  //  console.log(id)
  const [activeStep, setActiveStep] = React.useState(0);

  const [value, loading, error] = useDocument(doc(db, "services", id));
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  console.log(patient);

  async function addDataToAppointments(id: string) {
    const appointmentId = uuid().slice(0,10)
    await setDoc(doc(db, "appointments", appointmentId), {
      ...patient,
      date: patient?.date?.toString(),
      serviceId: id,
      serviceTitle: value?.data()?.title,
      userId: user?.uid
    });
    if(user?.uid !== null){
        //get current appointment array of target user
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);

        //update array
        await updateDoc(doc(db, "users", user?.uid), {
            appointments: [...docSnap?.data()?.appointments, appointmentId]
        });
    }
    
    handleNext();
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
            Appointment for {value?.data()?.title}
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
                Appointment Confirmed
              </Typography>
              <Typography variant="subtitle1">
                Thank you for trusting Rajah Tupas Medical Services. Please visit the
                clinic at your specified time. You may now close this window
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep == 0 && <AddressForm patientFunc={setPatient} />}
              {activeStep == 1 && <PaymentForm />}
              {activeStep == 2 && (
                <Review
                  service={value?.data()?.title}
                  price={value?.data()?.price}
                />
              )}
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
                    onClick={() => addDataToAppointments(id)}
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
