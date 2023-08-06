import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import { blue } from '@mui/material/colors';
import ChartIcon from '@mui/icons-material/BarChart';
import WeeklyLeaderboard from './WeeklyLeaderBoard';

const WeeklyLeaderboardCard = () => (
  <Card sx={{ borderRadius: '15px', padding: 3, color: '#fff', backgroundColor: blue[500], marginBottom: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <ChartIcon fontSize="large" sx={{ marginRight: 1 }} />
      <Typography variant="h5">
        Weekly Leaderboard
      </Typography>
    </Box>
    <WeeklyLeaderboard />
  </Card>
);

export default WeeklyLeaderboardCard;
