import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  scanCodeBtn: {
    position: 'relative',
    display: 'block',
    width: 'fit-content',
    height: 'fit-content',
    margin: 'auto',
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.85em',
    backgroundColor: '#f79721',
    padding: '1em',
    border: '0px solid #d27a0e',
    fontWeight: '500',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#ea9020',
    },
  },
  scanCodeDiv: {
    padding: '1em 2em',
    paddingTop: '1em',
  },
  tryAgainBtn: {
    position: 'relative',
    display: 'block',
    width: 'fit-content',
    height: 'fit-content',
    margin: '2em auto',
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.85em',
    backgroundColor: '#f79721',
    padding: '1em',
    border: '0px solid #d27a0e',
    fontWeight: '500',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#ea9020',
    },
  }
}));