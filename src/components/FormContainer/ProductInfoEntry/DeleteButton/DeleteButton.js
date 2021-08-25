import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

const DeleteButton = ({ handleDelete, existingProduct }) => {
  const classes = useStyles();

  return (
    <div className={classes.purchaseSize} >
      <Button
        className={classes.deleteButton}
        onClick={handleDelete}
        color='secondary'
        variant='contained'
      >
        {existingProduct ? 'Delete' : 'Clear'}
      </Button>
    </div >
  );
};

export default DeleteButton;

DeleteButton.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  existingProduct: PropTypes.bool,
};

DeleteButton.defaultProps = {
  existingProduct: false,
};