import React from 'react';
import Select from '@material-ui/core/Select';
import CategoryDropdown from './CategoryDropdown/CategoryDropdown';
import useCategories from '../../../context/CategoriesContext/CategoriesContext';
import useStyles from './styles.js';

const ProductCategory = ({ handleChange, thisGrocery, setThisGrocery, setCurrentNotification }) => {
  const classes = useStyles();

  const { allCategories, createNewCategory } = useCategories();

  const handleAddCategory = (e) => {
    e.preventDefault();

    const newCategory = prompt('Name the new category: ');

    if (typeof newCategory === 'string' && newCategory.length) {
      createNewCategory(newCategory.toLowerCase());
      // Save this category to state
      setThisGrocery(prevObj => ({
        ...prevObj,
        category: newCategory
      }));
    } else if (newCategory) {
      const importMessage = {
        name: 'Invalid Name!',
        message: `please try again`,
      };
      setCurrentNotification(importMessage);
    }
  }

  return (
    <div className={classes.itemCategory}>
      <label className={classes.divLabel}>Category</label>
      <br />
      <Select
        native
        value={thisGrocery.category}
        onChange={handleChange}
        inputProps={{
          name: 'category',
          id: 'age-native-simple',
        }}
      >
        {CategoryDropdown(allCategories)}
      </Select>
      <button onClick={handleAddCategory} className={classes.newCategoryBtn}>+</button>
    </div>
  );
}

export default ProductCategory;