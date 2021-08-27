import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  searchProductsPrompt: {
    backgroundColor: '#fff',
    borderRadius: '0.5em',
    maxWidth: '500px',
    padding: '1em 3em',
  },
  separator: {
    'display': 'flex',
    width: '80%',
    margin: 'auto',
    color: '#a7a7a7',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '1em',
    marginTop: '0.5em',
    '&:before': {
      content: '""',
      flex: '1',
      borderBottom: '1px solid #a7a7a7',
    },
    '&:after': {
      content: '""',
      flex: '1',
      borderBottom: '1px solid #a7a7a7',
    },
    '&:not(:empty)::before': {
      marginRight: '.25em',
    },
    '&:not(:empty)::after': {
      marginLeft: '.25em',
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
    display: 'flex',
    justifySelf: 'center',
    margin: '1em auto',
  },
  promptsRedirects: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5em',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 'fit-content',
    margin: 'auto',
  },
  promptBtn: {
    width: 'fit-content',
    backgroundColor: 'rgb(67, 176, 42)',
    borderColor: 'rgb(67, 176, 42)',
    fontSize: '18px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '600',
    position: 'relative',
    margin: '0.5em',
    padding: '10px 18px',
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: 'rgb(54 155 31)',
    },
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
    },
  },
  scanUPCBtn: {
    backgroundColor: '#375bf3',
    '&:hover': {
      backgroundColor: '#284adb',
    },
    '& svg': {
      color: 'navy',
    },
  },
}));
