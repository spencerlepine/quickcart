import React from 'react';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useProducts from 'context/ProductsContext/ProductsContext';
import useStyles from './styles.js';

const SavedPage = () => {
  const classes = useStyles();

  const savedProducts = useProducts()['savedProducts'];

  console.log('saved products');

  return (
    <div className={`saved-container ${classes.savedContainer}`}>
      <h3 className={classes.savedTitle}>All Saved Items</h3>
      <BrowseItems productsObj={savedProducts} isSavedProducts={true} />
    </div>
  );
};

export default withAuthRedirect(SavedPage);
