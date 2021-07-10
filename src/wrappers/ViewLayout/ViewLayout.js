import React from 'react';
import useStyles from './styles.js';

const ViewLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.container}`}>
      {children}
    </div>
  );
}

export default ViewLayout;
