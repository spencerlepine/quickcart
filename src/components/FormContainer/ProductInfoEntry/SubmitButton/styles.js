import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  updateButton: {
    marginTop: '15px',
    width: 'fit-content',
    padding: '1em 5em',
    margin: 'auto',
    fontWeight: '800',
    backgroundColor: '#32b31a',
    '&:hover': {
      backgroundColor: '#2d9819',
    },
    '@media (max-width:450px)': {
      padding: '1em 3em',
    },
  },
}));
