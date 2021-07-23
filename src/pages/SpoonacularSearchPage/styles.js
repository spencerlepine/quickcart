import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formContainer: {
    marginTop: '3em',
    minHeight: '80vh',
  },
  form: {
    maxWidth: '750px',
    margin: 'auto',
    padding: '24px',
    marginTop: '2em',
    marginBottom: '1vh',
    backgroundColor: 'white',
    borderRadius: '1vh',
    '@media (max-width:1000px)': {
      padding: '0',
      marginTop: '20px',
    },
  },
  itemDetails: {
    paddingLeft: '.9375rem',
    paddingRight: '.9375rem',
    gridRowGap: '15px',
    padding: '15px',
  },
  itemName: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    '& input': {
      color: 'rgb(57, 57, 57)',
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '32px',
      padding: '6px',
    },
  },
  itemSize: {
    width: '30vw',
    maxWidth: '175px',
    '& input': {
      margin: '0px',
      fontWeight: '400',
      color: 'rgb(142, 142, 142)',
      fontSize: '16px',
      lineHeight: '17px',
      padding: '6px',
    },
  },
  imageContainer: {
    position: 'relative',
    width: 'fit-content',
    margin: 'auto',
    height: 'max(10vh, auto)',
    minHeight: '160px',
    '& img': {
      maxWidth: '200px',
      maxHeight: '200px',
    },
    '& button': {
      content: '"X"',
      position: 'absolute',
      display: 'block',
      top: '0px',
      right: '-10px',
      borderRadius: '50%',
      height: '35px',
      width: '35px',
      color: '#e23535',
      backgroundColor: 'white',
      border: '3px solid #cc3131',
      fontSize: '1.3em',
      fontWeight: '900',
      '&:hover': {
        backgroundColor: '#f3f3f3',
        color: '#ab1515',
        border: '3px solid #ab1515',
        boxShadow: '0px 0px 5px -2px #000000',
      },
    },
  },
  itemPrice: {
    '& input': {
      fontSize: '26px',
      lineHeigt: '26px',
      fontWeight: '700',
      padding: '6px',
    },
  },
  priceIndicator: {
    position: 'absolute',
    fontSize: '26px',
    margin: '0',
    padding: '0',
    left: '-15px',
    bottom: '15px',
  },
  itemPriority: {
    margin: 'inherit',
  },
  dollarSign: {
    position: 'relative',
    width: '50%',
    marginLeft: 'auto',
    '& div': {
      marginTop: '0',
    },
  },
  divLabel: {
    fontSize: '13px',
    padding: '0',
    color: '#403e3e',
  },
  itemServing: {
    color: '#3c78a5',
    '& input': {
      color: '#3c78a5',
    },
  },
  itemDate: {
    width: 'fit-content',
    marginLeft: 'auto',
  },
  updateButton: {
    marginTop: '15px',
    width: 'fit-content',
    padding: '1em 5em',
    margin: 'auto',
    fontWeight: '800',
    backgroundColor: '#32b31a',
    '&:hover': {
      backgroundColor: '#2d9819',
    },
    '@media (max-width:450px)': {
      padding: '1em 3em',
    },
  },
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
  fileInput: {
    outlineOffset: '-10px',
    height: '200px',
    margin: 'auto',
    display: 'block',
    '& div': {
      backgroundColor: '#f5f5f5',
      border: '2px dashed #b7b7b7',
      height: '100%',
      width: 'fit-content',
      margin: 'auto',
      position: 'relative',
    },
    '& input': {
      width: '80%',
      padding: '15px',
      color: '#0f690f',
      margin: 'auto',
      minHeight: '200px',
    },
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
  },
}));