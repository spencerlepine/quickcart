import React from 'react';
import useStyles from './styles';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import Backup from './Backup/Backup';
import Import from './Import/Import';
import OpenLogs from '../../components/OpenLogs/OpenLogs';
import Logout from '../../components/LogoutBtn/LogoutBtn';

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.settingsContainer}>
      <OpenLogs />
      <hr />
      <Import />
      <hr />
      <Backup />
      <hr />
      <Logout customWidth='3em' />
    </div>
  );
}

export default withAuthRedirect(SettingsPage);
