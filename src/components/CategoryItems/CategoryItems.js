import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import useProducts from 'context/useProducts/useProducts';
import CardGrid from 'components/CardGrid/CardGrid';
import useStyles from './styles.js';

const CategoryItems = ({ category, products }) => {
  const classes = useStyles();

  useEffect(() => {
    // fetchCategory(category);
    console.log('HERE: FETCH THE CATEGORY ITEMS TO DISPLAY', category);
  }, []);

  const categoryItems = products;
  return (
    <div className={`category-items ${classes.categoryItems}`}>
      <CardGrid list={categoryItems} singleRow={true} minimalFormat={true} />
    </div>
  );
};

export default CategoryItems;

CategoryItems.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
