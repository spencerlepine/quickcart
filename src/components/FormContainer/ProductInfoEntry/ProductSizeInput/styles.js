import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
  productField: {
    position: 'relative',
    margin: '2em',
    padding: '0',
    border: '4px solid #16af3859',
    borderRadius: '5px',
    background: '#e5fff4',
    width: 'fit-content',
    display: 'inline-block',
  },
  unitInput: {
    '& div': {
      border: '1px solid white',
      background: 'white',
    },
    padding: '0',
    margin: '0.5em',
  },
  unitCount: {
    width: '6em',
    margin: '0px',
    fontWeight: '400',
    color: 'rgb(142, 142, 142)',
    fontSize: '16px',
    lineHeight: '17px',
    padding: '3px',
    '& input': {
      background: 'white',
      padding: '0.5em',
      margin: '4px',
    },
  },
  divLabel: {
    display: 'block',
    position: 'absolute',
    border: '4px solid #16af3859',
    borderBottomStyle: 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    fontSize: '13px',
    background: 'white',
    padding: '0.5em 0.5em 0 0.5em',
    top: '-2em',
    color: '#403e3e',
  },
  formContainer: {
    marginTop: '2%',
    minHeight: '80vh',
  },
}));
