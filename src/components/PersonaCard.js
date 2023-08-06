import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

export default function PersonaCard({ title, score }) {
  return (
    <Card style={{ height: '100%' }} variant="outlined">
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <div style={{ marginTop: '15px', marginBottom: '10px' }}>
          <LinearProgress variant="determinate" value={score} />
        </div>
        <Typography variant="caption">Score: {score}%</Typography>
      </CardContent>
    </Card>
  );
}
