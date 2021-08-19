import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useStyles from './styles.js';

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <div className="settings-container">
      <div className={classes.settingOptions}>

      </div>

      {/* <AccountDetials /> */}

      {/* <SyncDataOptions /> */}
    </div>
  );
};

export default withAuthRedirect(SettingsPage);
