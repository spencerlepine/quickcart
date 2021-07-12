import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  navBarSpacing: {
    height: '65px',
    top: '0',
    width: '10px',
  },
  navBar: {
    zIndex: 6,
    position: 'fixed',
    top: '0',
    backgroundColor: '#333333',
    width: '100%',
    borderBottom: '2px solid #828282',
  },
  navbarContainer: {
    display: 'flex',
    margin: 'auto',
  },
  menuToggleBtn: {
    zIndex: 99,
    width: 'max-content',
    display: 'inline-flex',
    borderRadius: '4px',
    padding: '14px 10px',
    fontSize: '1.3em !important',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textDecoration: 'none',
    color: '#e2e2e6',
    marginTop: 'auto',
    marginBottom: 'auto',
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
  logoLink: {
    '& img': {
      maxHeight: '45px',
      width: 'auto',
    },
    margin: 'auto',
  }
}))
