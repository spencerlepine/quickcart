import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  searchPrompt: {
    border: '2px solid #000000b8',
    'background': '#000000b8',
    'position': 'fixed',
    'top': '0',
    'height': '100%',
    'width': '100%',
    'zIndex': '4',
    'left': '0'
  },
  searchMessage: {
    backgroundColor: 'ghostwhite',
    padding: '2em',
    borderRadius: '15px',
    'margin': '0',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'MsTransform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)'
  },
  'separator': {
    'display': 'flex',
    'alignItems': 'center',
    'textAlign': 'center',
    marginBottom: '2em',
    marginTop: '1em',
    '&:before': {
      'content': '""',
      'flex': '1',
      'borderBottom': '1px solid #000'
    },
    '&:after': {
      'content': '""',
      'flex': '1',
      'borderBottom': '1px solid #000'
    },
    '&:not(:empty)::before': {
      'marginRight': '.25em'
    },
    '&:not(:empty)::after': {
      'marginLeft': '.25em'
    },
  },
  manualBtn: {
    borderRadius: '2px',
    border: '1px solid #25a941',
    background: 'white',
    padding: '0.5em 1em',
    width: 'fit-content',
    textTransform: 'uppercase',
    color: '#25a941',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    'marginBottom': '0.5em',
    'position': 'absolute',
    bottom: '6%',
    'left': '50%',
    'MsTransform': 'translate(-50%, 0%)',
    'transform': 'translate(-50%, 0%)',
  },
  searchBtn: {
    width: 'fit-content',
    backgroundColor: 'rgb(67, 176, 42)',
    borderColor: 'rgb(67, 176, 42)',
    fontSize: '18px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '600',
    position: 'relative',
    padding: '10px 18px',
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '& svg': {
      color: '#007323',
      position: 'sticky',
      margin: 'auto',
    },
    '& p': {
      display: 'inline',
      margin: 'auto',
      position: 'relative',
      bottom: '8px',
      padding: '0',
    }
  }
}));