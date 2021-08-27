import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  servingsPer: {
    height: 'fit-content',
    margin: 'auto',
  },
  servingsPerInput: {
    display: 'block',
    minWidth: '60px',
    maxWidth: '100px',
    margin: 'auto',
    '& input': {
      background: 'white',
      width: 'fit-content',
      margin: 'auto',
      fontSize: '26px',
      lineHeigt: '26px',
      fontWeight: '700',
      padding: '6px',
    },
  },
  priceIndicator: {
    position: 'absolute',
    fontSize: '26px',
    margin: '0',
    padding: '0',
    left: '-15px',
    bottom: '6px',
  },
  divLabel: {
    fontSize: '13px',
    padding: '0',
    color: '#403e3e',
  },
  dollarSign: {
    position: 'relative',
    minWidth: '100px',
    width: '100px',
    margin: 'auto',
    '& div': {
      marginTop: '0',
    },
  },
  itemServing: {
    color: '#3c78a5',
    '& input': {
      color: '#3c78a5',
    },
  },
}));
