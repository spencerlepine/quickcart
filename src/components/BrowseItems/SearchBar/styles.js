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
  orderOption: {
    borderRadius: '2px',
    border: '1px solid #25a941',
    background: 'white',
    padding: '0.5em 1em',
    width: 'fit-content',
    textTransform: 'uppercase',
    color: '#25a941',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    margin: '0.25em',
  },
}));
