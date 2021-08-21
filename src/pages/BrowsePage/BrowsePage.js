import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import useStyles from './styles.js';

import sampleProducts from 'config/sampleData/sampleProducts';

const BrowsePage = () => {
  const classes = useStyles();

  return (
    <div className={`browse-container ${classes.browseContainer}`}>
      <BrowseItems productsObj={sampleProducts} />
    </div>
  );
};

export default withAuthRedirect(BrowsePage);
