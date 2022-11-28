import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DocumentData } from "firebase/firestore";
import AtomicCard from "../atoms/Card";

type Category = {
  name: string;
  price: number;
};

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  category?: Category[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({ services }: DocumentData) {
  return (
    <Grid container spacing={2} sx={{m: 4}}>
      {services.map((service: Service, id: number) => (
        <Grid item key={id}>
            <AtomicCard
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
            />
        </Grid>
      ))}
    </Grid>
  );
}
