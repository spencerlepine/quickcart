import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import useProducts from 'context/ProductsContext/ProductsContext';
import useStyles from './styles.js';

const BrowsePage = () => {
  const classes = useStyles();

  const productsObj = useProducts()['externalProducts'];

  return (
    <div className={`browse-container ${classes.browseContainer}`}>
      <BrowseItems productsObj={productsObj} />
    </div>
  );
};

export default withAuthRedirect(BrowsePage);
