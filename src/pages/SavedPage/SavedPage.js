import React from 'react';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useProducts from 'context/ProductsContext/ProductsContext';
import sampleProducts from 'config/sampleData/sampleProducts.json';
import useStyles from './styles.js';

const developmentMode = process.env.NODE_ENV === 'development';

const SavedPage = () => {
  const classes = useStyles();

  let savedProducts;
  if (developmentMode) {
    savedProducts = sampleProducts;
  } else {
    savedProducts = useProducts()['savedProducts'];
  }

  return (
    <div className={`saved-container ${classes.savedContainer}`}>
      <h3 className={classes.savedTitle}>All Saved Items</h3>
      <BrowseItems productsObj={savedProducts} isSavedProducts={true} />
    </div>
  );
};

export default withAuthRedirect(SavedPage);
