import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  imageGoogleSearch: {
    background: '#fff',
    minHeight: '12em',
    padding: '1em',
    minWidth: '300px',
  },
  searchbar: {
    margin: '0.25em',
  },
  popupSearchBar: {
    margin: 'auto',
    width: '90%',
  },
  searchResultCards: {
    '&::-webkit-scrollbar': {
      background: 'white',
    },
    width: 'fit-content',
    padding: '0',
    margin: 'auto',
    marginTop: '2em',
    overflowY: 'scroll',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    maxHeight: '70vh',
    '@media (max-width:900px)': {
      gridTemplateColumns: 'auto auto',
    },
    '@media (max-width:640px)': {
      gridTemplateColumns: 'auto',
    },
  },
}));
