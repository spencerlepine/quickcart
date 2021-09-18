import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartViewer: {
    maxWidth: '700px',
    margin: 'auto',
  },
  btn: {
    width: 'fit-content',
    fontSize: '18px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '600',
    position: 'relative',
    margin: '0.5em',
    padding: '10px 18px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '& p': {
      display: 'inline',
      margin: 'auto',
      position: 'relative',
      bottom: '8px',
      padding: '0',
    },
  },
  toggleBtn: {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(67, 176, 42)',
    borderColor: 'rgb(67, 176, 42)',
    '&:hover': {
      backgroundColor: 'rgb(54 155 31)',
    },
    '& svg': {
      color: '#007323',
      position: 'sticky',
      margin: 'auto',
    },
  },
  checkoutBtn: {
    color: 'rgb(255, 255, 255)',
    borderColor: 'rgb(42 49 176)',
    backgroundColor: 'rgb(32 90 211)',
    '&:hover': {
      backgroundColor: 'rgb(42 49 176)',
    },
    '& svg': {
      color: '#007323',
      position: 'sticky',
      margin: 'auto',
    },
  },
  cartTotal: {
    float: 'right',
    fontSize: '1.5em',
    fontWeight: '800',
    color: 'gray',
    width: 'fit-content',
  },
  dollarPrice: {
    color: '#a82d0b',
  },
  redirectButton: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#ee8f21',
    '&:hover': {
      backgroundColor: '#b06917',
    },
    '@media (max-width:450px)': {
      padding: '1em 3em',
    },
  },
}));
