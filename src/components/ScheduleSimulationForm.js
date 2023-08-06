// src/components/ScheduleSimulationForm.js
import React from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Users from '../data/Users';
import CustomerPersonas from '../data/CustomerPersonas';
import RetailScenarios from '../data/RetailScenarios';

const ScheduleSimulationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submit event here...
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Autocomplete
            id="agents"
            options={Users}
            getOptionLabel={(option) => option}
            style={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Trainee" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="customerPersonas"
            options={CustomerPersonas}
            getOptionLabel={(option) => option.title} // Assuming each persona has a 'title' property
            style={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Customer Persona" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="scenarios"
            options={RetailScenarios}
            getOptionLabel={(option) => option.title} // Assuming each scenario has a 'title' property
            style={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Scenario to Simulate" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="datetime-local"
            label="Schedule Time"
            type="datetime-local"
            defaultValue="2023-08-04T10:30"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Schedule Simulation
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ScheduleSimulationForm;
