import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartLink: {
    display: 'flex',
    margin: '0',
    backgroundColor: 'ghostwhite',
    padding: '0 0.2em',
    borderRadius: '1em',
    textDecoration: 'none',
    '& p': {
      color: '#333333',
      fontWeight: '700',
      fontSize: '1.2em',
      margin: 'auto',
      borderRadius: '0.4em',
      padding: '0 0.2em',
      display: 'inline !important',
    },
    '& svg': {
      margin: 'auto',
      fontSize: '1.75em',
      color: '#333333',
    },
  },
  link: {
    width: 'max-content',
    display: 'flex',
    borderRadius: '4px',
    textdecoration: 'none',
    padding: '14px 10px',
    fontSize: '1.3em !important',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#e2e2e6',
    '& p': {
      margin: '5%',
      float: 'right',
      padding: '0',
      marginLeft: '5px',
      whiteSpace: 'nowrap',
    },
    '&:hover': {
      color: 'gray',
    },
  },
}));
