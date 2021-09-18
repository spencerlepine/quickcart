import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cartLog: {
    margin: '1em auto',
    maxWidth: '400px',
    border: '1px solid black',
    fontFamily: 'MerchantCopy',
  },
  itemsSold: {
    width: 'fit-content',
    padding: '0.5em !important',
    margin: 'auto',
    display: 'block',
  },
  receiptCost: {
    display: 'block',
    fontSize: '0.85em',
    textTransform: 'uppercase',
    width: 'fit-content',
    padding: '0',
    marginRight: '0.1em !important',
    marginLeft: 'auto !important',
  },
  totalText: {
    color: 'black',
    marginRight: '2em',
  },
}));