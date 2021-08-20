import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

const SubmitButton = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.purchaseSize} >
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.updateButton}
        onClick={handleSubmit}
      // disabled={disableAdd}
      >
        {/* {existingProduct ? 'Update' : 'Submit'} */}Submit
      </Button>
    </div >
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
