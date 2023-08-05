// src/pages/LoginPage.js
import React, { useContext, useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import Navbar from '../components/Navbar';

// import your image here
import callCenterImage from '../assets/call-centre-ops.jpeg'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const userRole = username === 'admin' ? 'superuser' : 'normal';

    setUser({ username, role: userRole });
    setIsLoggedIn(true);

    navigate('/dashboard');
    
    
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* <Navbar /> */}
      <Container maxWidth="sm" component="main" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" align="center">Welcome to Generative AI Call Center Ops</Typography>
          <Typography variant="h5" align="center">Please login to continue</Typography>
        </Box>
        <img src={callCenterImage} alt="Call Center" style={{ width: '100%', height: 'auto' }} />
        <form noValidate autoComplete="off" onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
