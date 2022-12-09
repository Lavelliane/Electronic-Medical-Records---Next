import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DocumentData } from "firebase/firestore";
import AtomicCard from "../atoms/Card";
import { Service } from "../../types/types";


type Prop = {
  services: DocumentData;
  email: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({ services, email }: Prop) {
  return (
    <Grid container spacing={2} sx={{m: 4}}>
      {services.map((service: Service) => (
        <Grid item key={service.id}>
            <AtomicCard
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
                id={service.id}
                email={email}
            />
        </Grid>
      ))}
    </Grid>
  );
}
