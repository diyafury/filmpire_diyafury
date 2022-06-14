import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

const Profile = () => {
  console.log('Profile');
  // without helper function userSelector
  // const { user } = useSelector((state) => state.user);
  const { user } = useSelector(userSelector);
  const favouriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Profile - { user.username }
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout&nbsp;<ExitToApp />
        </Button>
      </Box>
      {!favouriteMovies.length
        ? <Typography variant="h5">Add favourite or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            FAVOURITE MOVIES
          </Box>
        )}
    </Box>
  );
};

export default Profile;
