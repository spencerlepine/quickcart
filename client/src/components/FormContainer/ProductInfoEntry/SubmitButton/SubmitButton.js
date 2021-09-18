import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

const SubmitButton = ({ handleSubmit, editingMode, isExternalProduct }) => {
  const classes = useStyles();

  let submitText = 'Submit';
  if (isExternalProduct) {
    submitText = 'Create';
  } else if (editingMode) {
    submitText = 'Update';
  }

  return (
    <div className={classes.submitContainer} >
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.updateButton}
        onClick={handleSubmit}
      >
        {submitText}
      </Button>
    </div >
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editingMode: PropTypes.bool,
  isExternalProduct: PropTypes.isRequired,
};

SubmitButton.defaultProps = {
  editingMode: false,
};
