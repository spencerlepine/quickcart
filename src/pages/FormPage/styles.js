import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  formContainer: {
    marginTop: '2%',
    minHeight: '80vh',
  },
  form: {
    borderRadius: '25px 25px 0px 0px',
    maxWidth: '600px',
    margin: 'auto',
    padding: '24px',
    marginBottom: '1vh',
    backgroundColor: 'white',
    '@media (max-width:1000px)': {
      padding: '0',
      marginTop: '20px',
    },
  },
  itemDetails: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
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
  itemCategory: {
    position: 'relative',
    justifySelf: 'center',
  },
  importantFields: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    border: '2px solid #d8d8d8',
    backgroundColor: '#f0f4f7',
    display: 'flex',
    padding: '1em',
  }
}));