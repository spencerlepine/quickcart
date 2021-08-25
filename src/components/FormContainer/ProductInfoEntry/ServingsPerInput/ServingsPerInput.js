import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import useStyles from './styles.js';

const ServingsPerInput = ({ servings_per, fieldsProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.servingsPer} >
      <label className={classes.divLabel} htmlFor={'servings_per'}>Servings Per</label>
      <TextField
        {...fieldsProps}
        className={classes.servingsPerInput}
        type={'number'}
        fullWidth
        name={'servings_per'}
        placeholder={'1'}
        value={servings_per}
        inputProps={{ min: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">x</InputAdornment>,
        }}
      />
    </div >
  );
};

export default ServingsPerInput;

ServingsPerInput.propTypes = {
  servings_per: PropTypes.number.isRequired,
  fieldsProps: PropTypes.object.isRequired,
};
