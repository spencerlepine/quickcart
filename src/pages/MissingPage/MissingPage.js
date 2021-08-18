import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useStyles from './styles.js';

const MissingPage = () => {
  const classes = useStyles();

  return (
    <div className="missing-container">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default withAuthRedirect(MissingPage);
