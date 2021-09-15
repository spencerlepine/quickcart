import React from 'react';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useProducts from 'context/ProductsContext/ProductsContext';
import useStyles from './styles.js';

const SavedPage = () => {
  const classes = useStyles();

  const savedProducts = useProducts()['savedProducts'];

  return (
    <div className={`saved-container ${classes.savedContainer}`}>
      <BrowseItems productsObj={savedProducts} isSavedProducts={true} />
    </div>
  );
};

export default withAuthRedirect(SavedPage);
