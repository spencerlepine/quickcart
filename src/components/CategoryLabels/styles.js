import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  categoriesContainter: {
    'height': 'fit-content',
    'margin': 'auto',
    'maxWidth': '800px',
    'marginTop': '5px',
    'minHeight': '40px',
    'overflowX': 'scroll',
    'paddingTop': '20px',
    minWidth: '400px',
    MsOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },
}));
