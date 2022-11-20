import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "animate.css";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chuck Norris dice:
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
        </Typography>
      </CardContent>
    </Card>
  );
}