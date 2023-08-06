import React from 'react';
import { Tabs, Tab, Grid, Paper, TextField, Pagination, Typography } from '@mui/material';
import personas from '../data/CustomerPersonas';
import PersonaCard from '../components/PersonaCard';

export default function PersonaManagement() {
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 5;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Scroll to the content container
    const contentElement = document.getElementById("personaContentContainer");
    if (contentElement) {
      window.scrollTo({
        top: contentElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  const filteredPersonas = personas.filter(
    persona => persona.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  return (
    <Paper>
      <Typography variant="h5" style={{ padding: '20px', textAlign: 'center' }}>
        Persona Management
      </Typography>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="View Personas" />
        <Tab label="Generate Personas" />
      </Tabs>

      <div id="personaContentContainer">
        {value === 0 && (
          <div>
            <TextField 
              label="Search Personas" 
              variant="outlined" 
              fullWidth 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ margin: '20px 0' }}
            />
            <Grid container spacing={2}>
              {filteredPersonas.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((persona) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={persona.id}>
                  <PersonaCard 
                    title={persona.title} 
                    description={persona.description} 
                    score={persona.score} 
                  />
                </Grid>
              ))}
            </Grid>
            <Pagination 
              count={Math.ceil(filteredPersonas.length / itemsPerPage)}
              page={page}
              onChange={(event, value) => setPage(value)}
              style={{ marginTop: '20px' }}
            />
          </div>
        )}
        
        {value === 1 && (
          <div>
            {/* Code to allow users to upload chat transcripts and generate personas */}
          </div>
        )}
      </div>
    </Paper>
  );
}
