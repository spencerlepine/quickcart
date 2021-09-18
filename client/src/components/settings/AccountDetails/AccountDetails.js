import React from 'react';
import useAuth from 'context/AuthContext/AuthContext';
import useStyles from './styles.js';

const AccountDetails = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  return (
    <div className={`accountDetails ${classes.accountDetails}`}>
      <h2>Account Details</h2>
      <h4>Hello{currentUser ? ` ${currentUser['displayName']}!` : '!'}</h4>
      <p><b>Email:</b> {currentUser['email']}</p>
      <p><b>Acount Created:</b> July 12th, 2020</p>
      <p><b>Total Items Saved:</b> 25</p>
    </div>
  );
};

export default AccountDetails;
