import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice'; // Assuming the logout action is imported
// import { toggleTheme } from '../features/auth/themeSlice';
import { RootState } from '../app/store';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';

import { useSelector } from 'react-redux';

const Navbar: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
//   const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode); // Correctly typed selector

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate('/'); // Redirect to login page after logout
  };

//   const handleThemeToggle = () => {
//     dispatch(toggleTheme());
//   };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        {/* User Login Info */}
        {isAuthenticated ? (
          <Box>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
            <Button color="inherit" onClick={() => navigate('/')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate('/signup')}>
              Signup
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
