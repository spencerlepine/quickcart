import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  deleteButton: {
    marginTop: '15px',
    width: 'fit-content',
    padding: '1em 5em',
    margin: 'auto',
    fontWeight: '800',
    backgroundColor: '#f50057',
    '&:hover': {
      backgroundColor: '#cd044b',
    },
    '@media (max-width:450px)': {
      padding: '1em 3em',
    },
  },
}));