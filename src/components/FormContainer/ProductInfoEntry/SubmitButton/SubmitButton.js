import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

const SubmitButton = ({ handleSubmit, editingMode }) => {
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
      >
        {editingMode ? 'Update' : 'Submit'}
      </Button>
    </div >
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editingMode: PropTypes.bool,
};

SubmitButton.defaultProps = {
  editingMode: false,
};
