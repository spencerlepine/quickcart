import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import AccountDetails from 'components/settings/AccountDetails/AccountDetails';
import Exporter from 'components/settings/Exporter/Exporter';
import BackupImporter from 'components/settings/BackupImporter/BackupImporter';
import ViewCartLogsButton from 'components/settings/ViewCartLogsButton/ViewCartLogsButton';
import LogoutButton from 'components/ui/LogoutButton/LogoutButton';
import useStyles from './styles.js';

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <div className="settings-container">
      <div className={classes.settingOptions}>
        <LogoutButton />
        <ViewCartLogsButton />
      </div>

      <AccountDetails />

      <Exporter />

      <BackupImporter />
    </div>
  );
};

export default withAuthRedirect(SettingsPage);
