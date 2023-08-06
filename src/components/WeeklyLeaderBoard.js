// src/components/WeeklyLeaderboard.js
import React from 'react';
import { Badge, Box, Grid, Paper, Typography } from '@mui/material';
import users from '../data/Users';

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}

const shuffledUsers = shuffle(users);
const leaderboardData = shuffledUsers.slice(0, 4)
  .map((user) => ({
    name: user,
    points: Math.floor(Math.random() * 500) // Random score between 0 and 200
  }))
  .sort((a, b) => b.points - a.points)
  .map((user, index) => ({
    ...user,
    rank: index + 1
  }));


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
