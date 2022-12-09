import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { DocumentData } from "firebase/firestore";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  id: string;
  email: string;
};

export default function AtomicCard({
  imageUrl,
  title,
  description,
  id,
  email
}: Props) {

  return (
    <>
      <Card sx={{ maxWidth: 345, height: 340 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          {email === 'staff@rajahtupas.com' && (
            <Button size="small" color="primary" href={`/appointment/${id}`} >
              View Appointments
            </Button>
          )}
          {email !== 'staff@rajahtupas.com' && (
            <Button size="small" color="primary" href={`/appointment/${id}`} >
              Set Appointments
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
