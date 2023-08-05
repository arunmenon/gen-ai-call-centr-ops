// src/App.js
import React,{useState} from 'react';
import UserContext from './UserContext';
import { BrowserRouter as Router,Routes, Route, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Change this to your preferred primary color
    },
    secondary: {
      main: '#f50057', // Change this to your preferred secondary color
    },
  },
  typography: {
    fontFamily: 'Arial', // Change this to your preferred font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // To make button text case-sensitive
        },
      },
    },
  },
});

function App() {

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PrivateRoute = ({ children, ...rest }) => {
    let navigate = useNavigate();
    return (
      isLoggedIn ? (
        children
      ) : (
        navigate('/', { state: { from: rest.location } }) // You may need to adjust how 'from' location is retrieved
      )
    );
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={ <LoginPage /> } />
            <Route path="/dashboard" element={ <PrivateRoute> <DashboardPage /> </PrivateRoute> } />
            {/* Other routes will go here */}
          </Routes>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
