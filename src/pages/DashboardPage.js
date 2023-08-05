import React from 'react';
import AgentSimulations from '../components/AgentSimulations';
import WeeklyLeaderboard from '../components/WeeklyLeaderBoard';
import ScheduleSimulationForm from '../components/ScheduleSimulationForm';

import { Box, Grid, Typography, Container, Card } from '@mui/material';

const DashboardSection = ({ title, children }) => (
  <Card sx={{ bgcolor: 'background.default' }}>  // using the theme background color
    <Box p={2}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      {children}
    </Box>
  </Card>
);

const DashboardPage = () => (
  <Container maxWidth="lg" sx={{ bgcolor: 'background.default' }}>  // using the theme background color
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>Dashboard</Typography>
      </Grid>
      <Grid item xs={12}>
        <AgentSimulations />
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardSection title="Weekly Leaderboard">
        <WeeklyLeaderboard />
        </DashboardSection>
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardSection title="Schedule Simulation">
        <ScheduleSimulationForm />
        </DashboardSection>
      </Grid>
    </Grid>
  </Container>
);

export default DashboardPage;
