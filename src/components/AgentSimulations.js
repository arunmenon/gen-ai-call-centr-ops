// src/components/AgentSimulations.js
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Card, Container, Grid, Typography } from '@mui/material';

const columns = [
  { field: 'name', headerName: 'Agent Name', width: 130, sortable: true },
  { field: 'date', headerName: 'Simulation Date', width: 130, sortable: true },
  { field: 'score', headerName: 'Score', type: 'number', width: 90, sortable: true },
];
// Sample data
const rows = [
  { id: 1, name: 'John Doe', date: '01/02/2023', score: 98 },
  { id: 2, name: 'Jane Doe', date: '02/02/2023', score: 88 },
  { id: 3, name: 'Peter Parker', date: '03/02/2023', score: 78 },
  { id: 4, name: 'Clark Kent', date: '04/02/2023', score: 95 },
  { id: 5, name: 'Tony Stark', date: '05/02/2023', score: 85 },
  { id: 6, name: 'Bruce Wayne', date: '06/02/2023', score: 75 },
  { id: 7, name: 'Natasha Romanoff', date: '07/02/2023', score: 95 },
  { id: 8, name: 'Clint Barton', date: '08/02/2023', score: 85 },
  { id: 9, name: 'Wanda Maximoff', date: '09/02/2023', score: 75 },
  { id: 10, name: 'Steve Rogers', date: '10/02/2023', score: 95 },
  { id: 11, name: 'Thor Odinson', date: '11/02/2023', score: 85 },
  { id: 12, name: 'Bruce Banner', date: '12/02/2023', score: 75 },
  { id: 13, name: 'Scott Lang', date: '13/02/2023', score: 95 },
  { id: 14, name: 'Hope Van Dyne', date: '14/02/2023', score: 85 },
  { id: 15, name: 'Carol Danvers', date: '15/02/2023', score: 75 },
  { id: 16, name: 'Sam Wilson', date: '16/02/2023', score: 95 },
  { id: 17, name: 'Bucky Barnes', date: '17/02/2023', score: 85 },
  { id: 18, name: 'Nick Fury', date: '18/02/2023', score: 75 },
  { id: 19, name: 'Maria Hill', date: '19/02/2023', score: 95 },
  { id: 20, name: 'Phil Coulson', date: '20/02/2023', score: 85 },
  // More rows here...
];

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
          <Typography variant="h4" gutterBottom>Agent Simulations</Typography>
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