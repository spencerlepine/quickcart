import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  itemCard: {
    'width': 'fit-content',
    'margin': '0.5em',
    'display': 'inline-block',
    'padding': '0.7em',
    'flexWrap': 'wrap',
    'maxWidth': '150px',
    'border': '1px solid #dadada',
    'maxHeight': '220px',
    'borderRadius': '8px',
    '&:hover': {
      'boxShadow': '0px 0px 2px 1px #a9a9a9',
    },
  },
  thumbnailContainer: {
    position: 'relative',
    width: '150px',
    height: '150px',
  },
  itemThumbnail: {
    display: 'block',
    maxWidth: '150px',
    maxHeight: '150px',
    'margin': '0',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'MsTransform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)'
  },
  itemName: {
    margin: '2px',
    display: 'block',
    fontWeight: '600',
    color: '#4e4e4e',
  },
  itemBrand: {
    color: 'gray',
    margin: '1px',
    fontSize: '0.8rem',
  },
  itemGrade: {
    color: 'gray',
    fontSize: '1rem',
  },
}));