import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import groceryCategories from 'config/schema/groceryCategories';
import useStyles from './styles.js';

const ProductCategoryInput = ({ category, handleChange }) => {
  const classes = useStyles();

  const categories = Object.values(groceryCategories);
  const categoryOptions = categories.map((category, i) => (
    <option key={i} value={category}>{category}</option>
  ));

  const dropdowns = [<option label='None' value='other' key={999} />, ...categoryOptions];

  return (
    <div className={classes.purchaseSize} >
      <p className={classes.divLabel}>Category</p>
      <Select
        native
        value={category}
        onChange={handleChange}
        inputProps={{
          name: 'category',
          id: 'age-native-simple',
        }}
      >
        {dropdowns}
      </Select>
    </div >
  );
};

export default ProductCategoryInput;

ProductCategoryInput.propTypes = {
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
