import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import useStyles from './styles.js';

const ProductSizeInput = ({ purchase_price, fieldsProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.purchasePrice} >
      <InputLabel htmlFor="standard-adornment-amount" className={classes.divLabel}>{'Purchase Price'}</InputLabel>
      <Input
        {...fieldsProps}
        id="standard-adornment-amount"
        name={'purchase_price'}
        placeholder={'0.00'}
        value={purchase_price || ''}
        inputProps={{ min: 0, step: 'any' }}
        type="number"
        className={classes.ProductSizeInput}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </div >
  );
};

export default ProductSizeInput;

ProductSizeInput.propTypes = {
  purchase_price: PropTypes.number.isRequired,
  fieldsProps: PropTypes.object.isRequired,
};
