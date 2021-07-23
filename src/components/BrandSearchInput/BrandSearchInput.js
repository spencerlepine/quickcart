import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import top100Brands from '../../modules/top100Brands';
import useStyles from './styles.js';

const BrandSearchInput = ({ thisGrocery, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.productField}>
      <Autocomplete
        className={classes.brandSearch}
        id="free-solo-demo"
        freeSolo
        options={top100Brands.map((option) => option)}
        renderInput={(params) => (
          <TextField {...params} label="Search Brands" margin="normal" variant="outlined" name="brand" value={thisGrocery.brand} onChange={handleChange} />
        )}
      />
    </div>
  );
}

export default BrandSearchInput;
