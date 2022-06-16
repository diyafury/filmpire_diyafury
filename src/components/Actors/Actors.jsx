import React, { useState } from 'react';
import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useHistory, useParams } from 'react-router-dom';

import { useGetMoviesByActorIdQuery, useGetActorDetailsQuery } from '../../services/TMDB';
import useStyles from './styles';
import { MovieList } from '..';

const Actors = () => {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();

  const { data, isFetching, error } = useGetActorDetailsQuery(id);

  const [page, setPage] = useState(1);
  const { data: movies, isFetching: isMoviesFetching } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
        Go back
      </Button>
    </Box>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12} lg={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {`Born: ${new Date(data?.birthday).toDateString()}`}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'Sorry, no biography yet...'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} color="primary" onClick={() => history.goBack()}>
              Back
            </Button>
          </Box>
        </Grid>

        <Box marginTop="2rem 0" width="100%">
          <Typography variant="h2" gutterBottom align="center">
            Movies
          </Typography>
          {movies && <MovieList movies={movies} numberOfMovies={12} />}
        </Box>
      </Grid>
    </>
  );
};

export default Actors;
