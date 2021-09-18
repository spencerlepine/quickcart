import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    backgroundColor: '#fff',
    padding: '0.5em',
    minWidth: '160px',
    maxWidth: '200px',
    cursor: 'pointer',
    position: 'relative',
    width: '12vh',
    margin: '0.4em',
    minHeight: '140px',
    fontFamily: 'Eina, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    '& img': {
      'maxWidth': '17vh',
      'maxHeight': '140px',
      'width': 'auto',
      'height': 'auto',
      'margin': '0',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'MsTransform': 'translate(-50%, -50%)',
      'transform': 'translate(-50%, -50%)',
    },
    '& h4': {
      color: '#000',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '0',
      height: '2em',
      marginTop: '10px',
    },
    '& p': {
      padding: '1px 5px 1px 0px',
      margin: '0',
      maxHeight: '40px',
      fontSize: '13px',
    },
  },
  unitCost: {
    'color': '#c7973c',
    'border': '1px solid #eaeaea',
    'zIndex': '5',
    'position': 'absolute',
    'top': '0.2em',
    'left': '0.2em',
    'fontWeight': '500',
    'background': '#f9f9f9',
  },
  foodPrice: {
    display: 'inline',
    'textShadow': '0.2px 0.2px #0000000e',
    lineHeight: '1.5em',
  },
  foodSize: {
    color: 'rgb(153, 153, 153)',
    lineHeight: '19.5px',
    fontWeight: '400',
  },
  purchaseSize: {
    paddingLeft: '5px !important',
    color: 'rgb(90, 90, 90)',
    display: 'inline',
  },
  foodName: {
    margin: '0',
    marginBottom: '5px !important',
    overflowWrap: 'anywhere',
  },
  imageContainer: {
    'width': '17vh',
    height: '17vh',
    position: 'relative',
    'maxHeight': '140px',
    padding: '10px',
    margin: 'auto',
  },
  expandButton: {
    display: 'inline',
    position: 'absolute',
    width: 'fit-content',
    color: 'gray',
    right: '25px',
    '& svg': {
      fontSize: '20px',
      'margin': '0',
      'position': 'absolute',
      'top': '0%',
      'left': '0',
      'transform': 'translate(0%, 0%)',
      'MsTransform': 'translate(0%, 0%)',
    },
  },
}));
