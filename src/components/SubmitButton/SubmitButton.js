import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './styles';

const SubmitButton = ({ handleSubmit, searchSelection, className, disableAdd }) => {
  const classes = useStyles();

  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      className={classes.updateButton}
      onClick={handleSubmit}
      disabled={disableAdd}
    >
      {searchSelection ? 'Update' : 'Submit'}
    </Button>
  )
}

export default SubmitButton;