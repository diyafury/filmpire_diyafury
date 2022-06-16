import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.25em 0.5em 1em rgba(0, 0, 0, 60%)',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
  },
}));
