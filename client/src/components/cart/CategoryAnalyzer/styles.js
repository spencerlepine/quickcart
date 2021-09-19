import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  fillerCategory: {
    position: 'relative',
    backgroundColor: '#efefef',
    padding: '1em',
    margin: '1em 0',
    '&& h4': {
      marginLeft: '2.5em',
      marginBottom: '1em',
      width: 'fit-content',
      display: 'inline',
    },
    '&& svg': {
      top: '0.3em',
      border: '4px solid gray',
      borderRadius: '50%',
      fontSize: '1.5em',
      position: 'absolute',
    },
  },
}));
