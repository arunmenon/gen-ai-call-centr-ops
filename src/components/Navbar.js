// src/components/Navbar.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import UserContext from '../UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <MuiLink color="inherit" underline="none" component={RouterLink} to="/">
          <Typography variant="h6">
            Call Center Agent Simulation
          </Typography>
        </MuiLink>
        {user ? (
          <>
            <Button color="inherit" component={RouterLink} to="/dashboard">Dashboard</Button>
            {user.role === 'superuser' && (
              <Button color="inherit" component={RouterLink} to="/admin">Admin</Button>
            )}
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
