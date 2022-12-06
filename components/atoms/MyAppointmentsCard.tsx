import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase'
import { useEffect, useState } from 'react';

interface Props {
    serviceDocId: string[];
}

export default function Appointment({serviceDocId}: Props) {


  return (
    <Grid item xs={12} md={6} sx={{width: '75%'}}>
      <CardActionArea component="a" href="#" sx={{mt: 2, ml: 2}}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {/* {title} */}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {/* {name} */}
            </Typography>
            <Typography variant="subtitle1" paragraph>
            {/* {date} */}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}