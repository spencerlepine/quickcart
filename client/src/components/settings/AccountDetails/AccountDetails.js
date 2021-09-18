import React, { useEffect } from 'react';
import useAuth from 'context/AuthContext/AuthContext';
import useStyles from './styles.js';

const AccountDetails = () => {
  const classes = useStyles();
  const { currentUser, accountDetails, getAccountDetails } = useAuth();

  useEffect(() => {
    if (!accountDetails['displayName']) {
      getAccountDetails();
    }
  }, [currentUser]);

  return (
    <div className={`accountDetails ${classes.accountDetails}`}>
      {accountDetails['displayName'] && (
        <>
          <h2>Hello{currentUser ? ` ${accountDetails['displayName']}!` : '!'}</h2>
          <hr />
          <h3 className={classes.detailsHeader}>Account Details</h3>
          <p><b>Email:</b> {currentUser['email']}</p>
          <p><b>Acount Created:</b> {accountDetails['joinDate'].toString()}</p>
          <p><b>Total Items Saved:</b> {accountDetails['savedItemCount']}</p>
        </>
      )}
    </div>
  );
};

export default AccountDetails;
