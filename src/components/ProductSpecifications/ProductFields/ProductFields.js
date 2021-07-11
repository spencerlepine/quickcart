import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles.js';
import grocerySchema from '../../../schema/groceryItem';
import toTitleCase from '../../../modules/toTitleCase';

const ProductFields = ({ thisGrocery, handleChange }) => {
  const classes = useStyles();

  return (
    <>
      {Object.keys(grocerySchema).map(key =>
      (<div key={key} className={classes.productField}><label className={classes.divLabel}>{toTitleCase(key)}</label>
        <TextField
          className={classes.itemSize}
          onChange={handleChange}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name={key}
          placeholder={key}
          type={typeof grocerySchema[key]}
          disabled={!(typeof thisGrocery[key] === 'string' || typeof thisGrocery[key] === 'number')}
          value={thisGrocery[key]}
        /></div>)
      )}
    </>
  );
}

export default ProductFields;
