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

type Appointment = {
  firstName: string;
  lastName: string;
  serviceTitle: string;
  age: number;
  date: string;
  userId: string;
};

interface Props {
  appointments: Appointment[];
}

export default function PatientAppointment({ appointments }: Props) {
  return (
    <>
      {appointments.length > 0 &&
        appointments.map((a) => (
          <Grid item xs={12} md={6} sx={{ width: "75%" }} key={a.userId}>
            <CardActionArea component="a" href="#" sx={{ mt: 2, ml: 2 }}>
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {a.firstName + " " + a.lastName}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Appointment for: {a.serviceTitle}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Date of Appointment: {a.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Age: {a.age}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
    </>
  );
}
