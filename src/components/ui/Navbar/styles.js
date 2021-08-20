import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  navBarSpacing: {
    height: '65px',
    top: '0',
    width: '10px',
  },
  navbarContainer: {
    margin: 'auto',
    display: 'flex',
    padding: '0.5em',
  },
  navbar: {
    width: '100%',
    zIndex: 20,
    position: 'fixed',
    top: '0',
    backgroundColor: '#333333',
    borderBottom: '2px solid #828282',
    fontSize: '1.3em !important',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#e2e2e6',
  },
  logoLink: {
    '& img': {
      maxHeight: '45px',
      width: 'auto',
    },
    margin: 'auto',
  },
}));
