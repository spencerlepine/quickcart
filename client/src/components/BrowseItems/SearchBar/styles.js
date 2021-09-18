import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  searchbarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',

  },
  searchbar: {
    marginLeft: '0.5em',
    flexGrow: '1',
  },
}));
