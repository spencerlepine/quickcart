import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  itemSize: {
    padding: '0.5em 1em 0em 0.5em',
  },
  purchasePrice: {
    position: 'relative',
    padding: '0',
    border: '4px solid #ababab59',
    borderRadius: '5px',
    background: 'white',
    width: 'fit-content',
    display: 'inline-block',
    justifySelf: 'center',
    margin: 'auto',
  },
  divLabel: {
    display: 'block',
    border: '4px solid #ababab59',
    borderBottomStyle: 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    position: 'absolute',
    fontSize: '13px',
    background: 'white',
    padding: '0.5em 0.5em 0 0.5em',
    top: '-1.7em',
    color: '#403e3e',
  },
}));
