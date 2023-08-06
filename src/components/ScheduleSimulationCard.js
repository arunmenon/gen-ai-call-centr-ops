import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import { pink } from '@mui/material/colors';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ScheduleSimulationForm from './ScheduleSimulationForm';

const ScheduleSimulationCard = () => (
  <Card sx={{ borderRadius: '15px', padding: 3, backgroundColor: pink[80], marginBottom: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <ScheduleIcon fontSize="large" sx={{ marginRight: 1 }} />
      <Typography variant="h5" gutterBottom>Schedule Agent Simulation</Typography>
    </Box>
    <ScheduleSimulationForm />
  </Card>
);

export default ScheduleSimulationCard;
