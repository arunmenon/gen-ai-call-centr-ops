import React from 'react';
import {Button, Tabs, Tab, Grid, Paper, TextField, Pagination, Typography } from '@mui/material';
import personas from '../data/CustomerPersonas';
import PersonaCard from '../components/PersonaCard';

export default function PersonaManagement() {
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 3;
  const [file, setFile] = React.useState(null);


  // Move personas data to local state
  const [personasData, setPersonasData] = React.useState(personas);

  // Handle updating a persona description
  const handleDescriptionUpdate = (id, newDescription) => {
    const updatedPersonas = personasData.map(persona => 
      persona.id === id ? { ...persona, description: newDescription } : persona
    );
    setPersonasData(updatedPersonas);
  }
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
};

const generatePersonas = () => {
    if (!file) return;
    
    // Here, you can process the uploaded file and generate personas.
    // This is just a placeholder and will need to be implemented based on your requirements.
    console.log(`Generating personas from ${file.name}...`);
    // After processing, reset the file.
    setFile(null);
};


  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    const contentElement = document.getElementById("personaContentContainer");
    if (!contentElement) return;

    // Scroll to the content container when "View Personas" is selected.
    if (newValue === 0) {
      window.scrollTo({
        top: contentElement.offsetTop,
        behavior: "smooth"
      });
    } 
    // Scroll to the top of the Paper component when "Generate Personas" is selected.
    else if (newValue === 1) {
      const paperElement = contentElement.closest('paper'); // Assuming your Paper component generates a 'paper' tag.
      if (paperElement) {
        window.scrollTo({
          top: paperElement.offsetTop,
          behavior: "smooth"
        });
      }
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
                    id={persona.id}
                    title={persona.title} 
                    description={persona.description} 
                    score={persona.score}
                    onDescriptionUpdate={handleDescriptionUpdate} 
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
    <div style={{ padding: '20px' }}>
        <Typography variant="h6" style={{ marginBottom: '20px', textAlign: 'center' }}>
            Generate Personas from Chat Transcripts
        </Typography>
        <input
            accept=".txt" // Accepting only .txt files for simplicity, you can modify this.
            id="upload-chat-transcripts"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
        />
        <label htmlFor="upload-chat-transcripts">
            <Button variant="contained" color="primary" component="span">
                Upload Chat Transcripts
            </Button>
        </label>
        {file && <Typography variant="body1" style={{ marginTop: '20px' }}>File uploaded: {file.name}</Typography>}
        <Button 
            variant="contained" 
            color="secondary" 
            style={{ marginTop: '20px' }} 
            onClick={generatePersonas}
            disabled={!file}
        >
            Generate Personas
        </Button>
    </div>
)}


      </div>
    </Paper>
  );
}
