import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import useProducts from 'context/useProducts/useProducts';
import CardGrid from 'components/CardGrid/CardGrid';
import useStyles from './styles.js';

const CategoryItems = ({ category }) => {
  const classes = useStyles();

  const allCategories = {}; // const { allCategories } = useProducts();

  useEffect(() => {
    // fetchCategory(category);
    console.log('HERE: FETCH THE CATEGORY ITEMS TO DISPLAY');
  }, []);

  const categoryItems = allCategories[category] || [];
  return (
    <div className={`category-items ${classes.categoryItems}`}>
      <CardGrid list={categoryItems} singleRow={true} />
    </div>
  );
};

export default CategoryItems;

CategoryItems.propTypes = {
  category: PropTypes.string.isRequired,
};
