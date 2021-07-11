import React from 'react';
import TextField from '@material-ui/core/TextField';
import toTitleCase from '../../../modules/toTitleCase';

const ProductName = ({ value, handleChange, name, thisClass }) => {
  return (
    <TextField
      className={thisClass}
      onChange={handleChange}
      variant='outlined'
      margin='normal'
      required
      type={'name'}
      fullWidth
      name={name}
      placeholder={toTitleCase(name)}
      value={value}
    />
  );
}

export default ProductName;
