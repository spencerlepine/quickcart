import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

const SubmitButton = ({ handleSubmit, existingProduct }) => {
  const classes = useStyles();

  return (
    <div className={classes.submitContainer} >
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.updateButton}
        onClick={handleSubmit}
        disabled={existingProduct}
      >
        {existingProduct ? 'Update' : 'Submit'}
      </Button>
    </div >
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  existingProduct: PropTypes.bool,
};

SubmitButton.defaultProps = {
  existingProduct: false,
};
