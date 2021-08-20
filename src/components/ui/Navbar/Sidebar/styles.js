import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  toggleIcon: {
    padding: '0.1em 0',
    fontSize: '2em',
    zIndex: 30,
  },
  sidebarContainer: {
    zIndex: 11,
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    backgroundColor: 'rgb(35, 35, 35)',
  },
  toggledMenu: {
    flexWrap: 'wrap',
    padding: '0.5em',
    height: 'fit-content',
    minWidth: '250px',
    maxWidth: '300px',
    display: 'flex',
  },
  sidebarLink: {
    justifySelf: 'center',
    flexDirection: 'row',
    marginLeft: '10%',
    display: 'flex',
    borderRadius: '4px',
    padding: '14px 10px',
    fontSize: '1.3em !important',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#e2e2e6',
    '& p': {
      position: 'relative',
      margin: '1%',
      float: 'right',
      padding: '0',
      marginLeft: '5px',
      whiteSpace: 'nowrap',
    },
    '&:hover p': {
      color: 'gray',
    },
  },
  'underline': {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: '#ffa40e',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover': {
      '&::before': {
        visibility: 'visible',
        width: '100%',
      },
    },
  },

}));
