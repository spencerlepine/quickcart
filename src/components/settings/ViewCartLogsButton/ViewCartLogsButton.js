import React from 'react';
import useStyles from './styles.js';

const ViewCartLogsButton = () => {
  const classes = useStyles();

  return (
    <div className={`viewCartLogsButton ${classes.viewCartLogsBtn}`}>
      <button className={classes.logButton}>View Cart Logs</button>
    </div>
  );
};

export default ViewCartLogsButton;
