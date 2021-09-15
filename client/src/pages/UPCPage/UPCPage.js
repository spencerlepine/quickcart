import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import ScannerContainer from 'components/ScannerContainer/ScannerContainer';
import useStyles from './styles.js';

const UPCPage = () => {
  const classes = useStyles();

  return (
    <div className={`upc-page ${classes.upcPage}}`}>
      <ScannerContainer />
    </div>
  );
};

export default withAuthRedirect(UPCPage);
