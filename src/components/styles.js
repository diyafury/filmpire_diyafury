import { makeStyles } from '@mui/styles';

// returning an object directly rather than a function body in js () => ({})
export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
  },
}));
