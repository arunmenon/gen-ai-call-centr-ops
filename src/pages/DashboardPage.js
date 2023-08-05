import React from 'react';
import AgentSimulations from '../components/AgentSimulations';
import { Box, Grid, Paper, Typography, Container, Card } from '@mui/material';

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
          This section could present a leaderboard that ranks agents based on their weekly simulation performance. Each row would display an agent's name, their rank, score, and change from the previous week.
        </DashboardSection>
      </Grid>
      <Grid item xs={12} md={6}>
        <DashboardSection title="Schedule Simulation">
          Here, superusers could schedule new simulations. This could be a form where the superuser selects an agent, a scenario, a date and time, and other relevant details.
        </DashboardSection>
      </Grid>
    </Grid>
  </Container>
);

export default DashboardPage;
