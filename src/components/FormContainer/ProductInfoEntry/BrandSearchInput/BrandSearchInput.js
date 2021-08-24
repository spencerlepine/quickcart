import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles.js';

const BrandSearchInput = ({ brand, handleChange }) => {
  const classes = useStyles();

  const fillerBrands = ['QFC', 'Safeway', 'Signagutre Select'];

  return (
    <div className={classes.purchaseBrand} >
      <Autocomplete
        className={classes.brandSearch}
        id="free-solo-demo"
        freeSolo
        options={fillerBrands.map(option => option)}
        renderInput={params => (
          <TextField {...params} label="Search Brands" margin="normal" variant="outlined" name="brand" value={brand} onChange={handleChange} />
        )}
      />
    </div >
  );
};

export default BrandSearchInput;

BrandSearchInput.propTypes = {
  brand: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
