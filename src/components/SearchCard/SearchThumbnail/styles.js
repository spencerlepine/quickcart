import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  itemCard: {
    padding: '0.7em',
    display: 'inline-block',
    // border: '1px solid black',
    margin: '0.5em',
    width: 'fit-content',
    minHeight: '180px',
    maxHeight: '220px',
    maxWidth: '150px',
    flexWrap: 'wrap',
    borderRadius: '8px',
    'WebkitBoxShadow': '0px 0px 5px -2px #000000',
    'boxShadow': '0px 0px 5px -2px #000000',
    '&:hover': {
      'boxShadow': '0px 0px 2px 1px #000000',
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