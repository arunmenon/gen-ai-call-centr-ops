import React from 'react';
import AgentSimulations from '../components/AgentSimulations';
import WeeklyLeaderboard from '../components/WeeklyLeaderBoard';
import ScheduleSimulationForm from '../components/ScheduleSimulationForm';
import PersonaManagement from '../components/PersonaManagement';


import { Box, Grid, Typography, Container, Card } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import ChartIcon from '@mui/icons-material/BarChart';
import ScheduleIcon from '@mui/icons-material/Schedule';

const DashboardPage = () => {
  return (
    <Container maxWidth="lg" sx={{ backgroundImage: 'url(/images/call-center-background.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 3, borderRadius: '15px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary" gutterBottom>
            Gen AI Call Center Ops
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <AgentSimulations />
        </Grid>
        <Grid item xs={12} md={6}>
        <PersonaManagement />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: '15px', padding: 3, color: '#fff', backgroundColor: blue[500], marginBottom: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <ChartIcon fontSize="large" sx={{ marginRight: 1 }} />
              <Typography variant="h5">
                Weekly Leaderboard
              </Typography>
            </Box>
            <WeeklyLeaderboard />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card sx={{ borderRadius: '15px', padding: 3, color: '#fff', backgroundColor: pink[80], marginBottom: 2 }}>
  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
    <ScheduleIcon fontSize="large" sx={{ marginRight: 1 }} />
    <Typography variant="h5">
      Schedule Simulation
    </Typography>
  </Box>
  <ScheduleSimulationForm />
</Card>

        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
