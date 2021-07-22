//
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  divLabel: {
    fontSize: '13px',
    padding: '0',
    color: '#403e3e',
  },
  newCategoryBtn: {
    'padding': '0px 6px',
    'margin': 'auto',
    'color': 'white',
    'background': '#ff9749',
    'fontWeight': '500',
    'fontSize': '24px',
    'border': 'none',
    'borderRadius': '5px',
    'top': '22px',
    'position': 'absolute',
    '&:hover': {
      backgroundColor: '#d47b39',
    },
  },
  itemCategory: {
    position: 'relative',
    justifySelf: 'center',
    margin: 'auto',
  }
}));