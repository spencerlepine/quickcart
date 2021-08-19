import React from 'react';
import useStyles from './styles.js';

const AccountDetails = () => {
  const classes = useStyles();

  return (
    <div className={`accountDetails ${classes.accountDetails}`}>
      <h4>Account Details</h4>
      <p><b>Email:</b> example@spencerlepine.com</p>
      <p><b>Acount Created:</b> July 12th, 2020</p>
      <p><b>Total Items Saved:</b> 25</p>
    </div>
  );
};

export default AccountDetails;
