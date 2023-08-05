// src/components/WeeklyLeaderboard.js
import React from 'react';
import { Badge,Box, Grid, Paper, Typography } from '@mui/material';

const leaderboardData = [
  { rank: 1, name: 'Clint Barton', points: 150 },
  { rank: 2, name: 'Steve Rogers', points: 120 },
  { rank: 3, name: 'Thor', points: 110 },
    { rank: 4, name: 'Scott Lang', points: 100 },
];

function WeeklyLeaderboard() {
  return (
    <Grid container spacing={3}>
      {leaderboardData.map((row, index) => (
        <Grid item xs={4} key={index}>
          <Paper sx={{
            padding: 2,
            textAlign: 'center',
            color: '#3f51b5',
            backgroundColor: '#f5f5f5',
            margin: '10px',
          }}>
            <Typography variant="h5" component="h2">
              #{row.rank}
            </Typography>
            <Typography variant="h6" component="p">
              {row.name}
            </Typography>
            {row.rank <= 3 && <Badge badgeContent="Top 3" color="primary" />}
            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
              {row.points} pts
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default WeeklyLeaderboard;
