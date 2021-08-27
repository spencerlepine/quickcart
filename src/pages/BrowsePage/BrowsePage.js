import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import useProducts from 'context/ProductsContext/ProductsContext';
import useStyles from './styles.js';

import sampleProducts from 'config/sampleData/sampleProducts.json';

const developmentMode = process.env.NODE_ENV === 'development';

const BrowsePage = () => {
  const classes = useStyles();

  let productsObj;
  if (developmentMode) {
    productsObj = sampleProducts;
  } else {
    productsObj = useProducts()['externalProducts'];
  }

  return (
    <div className={`browse-container ${classes.browseContainer}`}>
      <BrowseItems productsObj={productsObj} />
    </div>
  );
};

export default withAuthRedirect(BrowsePage);
