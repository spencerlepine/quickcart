import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useProducts from 'context/ProductsContext/ProductsContext';
import CardGrid from '..//CardGrid/CardGrid';
import useStyles from './styles.js';

const CategoryItems = ({ category, products, isSavedProducts }) => {
  const classes = useStyles();

  const { fetchCategoryDocs } = useProducts();

  useEffect(() => {
    fetchCategoryDocs(category, isSavedProducts);
  }, []);

  const categoryItems = Object.values(products);

  if (categoryItems.length) {
    return (
      <div className={`category-items ${classes.categoryItems}`}>
        <CardGrid list={categoryItems} singleRow={true} minimalFormat={true} isSavedProducts={isSavedProducts} handleViewMore={() => fetchCategoryDocs(category, isSavedProducts)} />
      </div>
    );
  } else {
    return null;
  }
};

export default CategoryItems;

CategoryItems.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
};
