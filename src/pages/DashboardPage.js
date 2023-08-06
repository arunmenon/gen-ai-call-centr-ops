import React from 'react';
import { Grid, Container } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader';
import AgentSimulations from '../components/AgentSimulations';
import PersonaManagement from '../components/PersonaManagement';
import WeeklyLeaderboardCard from '../components/WeeklyLeaderboardCard';
import ScheduleSimulationCard from '../components/ScheduleSimulationCard';

const DashboardPage = () => (
  <Container maxWidth="lg" sx={{ backgroundImage: 'url(/images/call-center-background.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 3, borderRadius: '15px' }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DashboardHeader />
      </Grid>
      <Grid item xs={12} md={6}>
        <AgentSimulations />
      </Grid>
      <Grid item xs={12} md={6}>
        <PersonaManagement />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklyLeaderboardCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <ScheduleSimulationCard />
      </Grid>
    </Grid>
  </Container>
);

export default DashboardPage;
