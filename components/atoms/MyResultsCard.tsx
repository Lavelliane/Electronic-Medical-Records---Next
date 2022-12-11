import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";

type Result = {
  appointmentId?: string;
  date: string;
  name: string;
  patientId: string;
  serviceTitle: string;
  staffFirstName: string;
  staffLastName: string;
  staffRemarks:string;
};

interface Props {
  results: Result[];
}

export default function MyResultsCard({ results }: Props) {
  return (
    <>
      {results.length > 0 &&
        results.map((r) => (
          <Grid item xs={12} md={6} sx={{ width: "75%" }} key={r.appointmentId}>
            <CardActionArea component="a" href="#" sx={{ mt: 2, ml: 2 }}>
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {r.serviceTitle}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary">
                    Date of Appointment: {r.date}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Name: {r.name}
                 </Typography>
                  <Typography variant="body1" paragraph mt={2} sx={{bgcolor: '#A5F1E9', borderRadius: '5px', padding:'5px'}}>
                    <strong>Result:</strong> {r.staffRemarks}
                 </Typography>
                  <Typography variant="subtitle2">
                    {r.staffFirstName + " " + r.staffLastName} 
                 </Typography>
                  <Typography variant="subtitle2">
                    <em>Lab-in-charge</em>
                 </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
    </>
  );
}
