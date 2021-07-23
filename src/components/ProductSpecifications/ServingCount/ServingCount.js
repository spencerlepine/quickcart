import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles.js';
import InputAdornment from '@material-ui/core/InputAdornment';

const ServingCount = ({ handleChange, thisGrocery }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.dollarSign} ${classes.itemServing}`}>
      <label className={classes.divLabel}>Servings Per</label>
      <TextField
        className={classes.itemPrice}
        onChange={handleChange}
        variant='outlined'
        margin='normal'
        required
        type={'number'}
        fullWidth
        name={'serving_quantity'}
        placeholder={'1'}
        value={thisGrocery['serving_quantity']}
        inputProps={{ min: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">x</InputAdornment>,
        }}
      />
    </div>
  );
}

export default ServingCount;
