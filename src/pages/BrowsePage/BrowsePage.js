import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import BrowseItems from 'components/BrowseItems/BrowseItems';
import useStyles from './styles.js';

const BrowsePage = () => {
  const classes = useStyles();

  return (
    <div className="browse-container">
      <p className={classes.test}>under construction</p>
      <BrowseItems />
    </div>
  );
};

export default withAuthRedirect(BrowsePage);
