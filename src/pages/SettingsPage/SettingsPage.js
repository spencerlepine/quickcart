import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useStyles from './styles.js';

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <div className="settings-container">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default withAuthRedirect(SettingsPage);
