// src/components/AgentSimulations.js
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Card, Container, Grid, Typography } from '@mui/material';
import users from '../data/Users';


const columns = [
  { field: 'name', headerName: 'Agent Name', width: 130, sortable: true },
  { field: 'date', headerName: 'Simulation Date', width: 130, sortable: true },
  { field: 'score', headerName: 'Score', type: 'number', width: 90, sortable: true },
];
// Sample data generation based on users
const rows = users.map((user, index) => ({
  id: index + 1,
  name: user,
  date: new Date(2023, 1, index + 1).toLocaleDateString(),
  score: Math.floor(Math.random() * 21) + 80, // Random score between 80 and 100
}));

function AgentSimulations() {
  const [searchText, setSearchText] = React.useState('');
  const [rowState, setRowState] = React.useState(rows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(searchValue, 'i');
    const filteredRows = rows.filter((row) => {
      return searchRegex.test(row.name.toString());
    });
    setRowState(filteredRows);
  };

  React.useEffect(() => {
    setRowState(rows);
  }, [rows]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Agent Assessment Scores</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Box p={2}>
              <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                <TextField
                  variant="outlined"
                  value={searchText}
                  onChange={(e) => requestSearch(e.target.value)}
                  placeholder="Search by agent name..."
                />
              </Box>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rowState}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection={false}
                />
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AgentSimulations;