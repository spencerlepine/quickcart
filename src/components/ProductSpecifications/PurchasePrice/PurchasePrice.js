import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles.js';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import toTitleCase from '../../../modules/toTitleCase';

const PurchasePrice = ({ handleChange, thisGrocery }) => {
  const classes = useStyles();

  const formattedPrice = Number.parseFloat(thisGrocery['purchase_price']);
  const key = 'purchase_price';

  return (
    <div className={classes.purchasePrice}>
      <InputLabel htmlFor="standard-adornment-amount" className={classes.divLabel}>{toTitleCase(key)}</InputLabel>
      <Input
        id="standard-adornment-amount"
        name={key}
        placeholder={key}
        value={thisGrocery[key]}
        onChange={handleChange}
        required
        type={'number'}
        className={classes.itemSize}
        onChange={handleChange}
        variant='outlined'
        margin='normal'
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </div>
  );
}

export default PurchasePrice;
