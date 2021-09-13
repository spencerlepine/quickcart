import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import AccountDetails from 'components/settings/AccountDetails/AccountDetails';
import ViewCartLogsButton from 'components/settings/ViewCartLogsButton/ViewCartLogsButton';
import LogoutButton from 'components/ui/LogoutButton/LogoutButton';
import useStyles from './styles.js';

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <div className={`settings-container ${classes.settingsPage}`}>
      <div className={classes.settingOptions}>
        <LogoutButton />
        <ViewCartLogsButton />
      </div>

      <AccountDetails />
    </div>
  );
};

export default withAuthRedirect(SettingsPage);
