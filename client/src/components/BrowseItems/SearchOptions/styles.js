import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  searchOptions: {
    width: 'fit-content',
    margin: 'auto',
  },
  optionBtn: {
    marginTop: '15px',
    width: 'fit-content',
    padding: '1em 2em',
    color: 'white',
    margin: '0.5em',
    border: 'none',
    fontWeight: '800',
    backgroundColor: '#32b31a',
    '&:hover': {
      backgroundColor: '#2d9819',
    },
    '@media (max-width:450px)': {
      padding: '1em',
    },
  },
}));
