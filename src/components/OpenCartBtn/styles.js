import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  cartLink: {
    display: 'flex',
    margin: '0',
    backgroundColor: 'ghostwhite',
    padding: '0px 10px 0px 10px',
    borderRadius: '15px',
    '& p': {
      color: '#333333',
      fontWeight: '700',
      margin: 'auto',
      display: 'inline !important',
    },
    '& svg': {
      color: '#333333',
    },
  },
  link: {
    width: 'max-content',
    display: 'flex',
    borderRadius: '4px',
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
    }
  },
}));
