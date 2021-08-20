import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import useStyles from './styles.js';

const BrowsePage = () => {
  const classes = useStyles();

  return (
    <div className={`browse-container ${classes.browseContainer}`}>
      <BrowseItems />
    </div>
  );
};

export default withAuthRedirect(BrowsePage);
