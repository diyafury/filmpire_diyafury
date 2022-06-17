import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB';
import RatedCards from '../RatedCards/RatedCards';

const Profile = () => {
  // without helper function userSelector
  // const { user } = useSelector((state) => state.user);
  const { user } = useSelector(userSelector);

  const { data: favouriteMovies, refetch: refetchFavourites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchListMovies, refetch: refetchWatchlist } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  useEffect(() => {
    refetchFavourites();
    refetchWatchlist();
  }, []);

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
      {!favouriteMovies?.results?.length && !watchListMovies?.results?.length
        ? <Typography variant="h5">Add favourite or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            <RatedCards title="Favourite Movies" data={favouriteMovies} />
            <RatedCards title="Watchlist" data={watchListMovies} />
          </Box>
        )}
    </Box>
  );
};

export default Profile;
