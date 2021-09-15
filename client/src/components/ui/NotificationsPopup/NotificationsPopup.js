import React from 'react';
import useStyles from './styles.js';

const NotificationsPopup = () => {
  const classes = useStyles();

  return (
    <div className={`notifications-popup ${classes.popupContainer}`}>
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default NotificationsPopup;
