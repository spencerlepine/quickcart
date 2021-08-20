import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import useStyles from './styles.js';

const ProductCategoryInput = ({ category, fieldsProps }) => {
  const classes = useStyles();

  const allCategories = ['test', 'test2'];

  const categoryOptions = allCategories.map((category, i) => (
    <option key={i} value={category}>{category}</option>
  ));

  const dropdowns = [<option label='None' value='' key={999} />, ...categoryOptions];

  return (
    <div className={classes.purchaseSize} >
      <p className={classes.divLabel} hmtlFor={'category'}>Category</p>
      <br />
      <Select
        native
        value={category}
        onChange={fieldsProps.handleChange}
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
  fieldsProps: PropTypes.object.isRequired,
};
