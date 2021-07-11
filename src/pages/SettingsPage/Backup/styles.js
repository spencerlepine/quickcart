import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  backupButton: {
    position: 'relative',
    display: 'block',
    width: 'fit-content',
    margin: '1em auto',
    marginBottom: '0',
    color: 'white',
    backgroundColor: '#2157f7',
    padding: '1em 4em 1em 1.75em',
    border: '0px solid #3647bf',
    fontWeight: '500',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#1c3ee3',
    },
  },
  backupDiv: {
    padding: '1em 2em',
    paddingTop: '1em',
  },
  inputLabel: {
    color: '#4f7ee6',
    position: 'relative',
    top: '-8px',
    paddingLeft: '10px',
  },
  importIcon: {
    color: '#4f7ee6',
  },
  downloadArrow: {
    borderRadius: '0px 4px 4px 0px',
    position: 'absolute',
    top: '0px',
    right: '0',
    backgroundColor: '#1c3ee3',
    '& svg': {
      padding: '7px',
    }
  },
}));