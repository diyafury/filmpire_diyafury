import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  genreImages: {
    // filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '20px',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
}));
