import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  logContianer: {
    width: 'fit-content',
    padding: '0.5em',
    margin: '1em auto',
  },
  logButton: {
    width: 'fit-content',
    backgroundColor: '#ef9b02',
    borderColor: '#b47502',
    height: '48px',
    fontSize: '18px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '600',
    position: 'relative',
    padding: '10px 18px',
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#b47502',
    },
  },
}));
