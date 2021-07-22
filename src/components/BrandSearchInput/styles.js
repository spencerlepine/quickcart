import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  productField: {
    margin: 'auto',
  },
  brandSearch: {
    minWidth: '150px',
    width: '20em',
    margin: 'auto',
    '& div': {
      background: 'white',
    },
  },
}));