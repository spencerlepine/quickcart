import React from 'react';
import useStyles from './styles.js';

const Exporter = () => {
  const classes = useStyles();

  return (
    <div className={`exporter ${classes.exporter}`}>
      <h5>Export Data</h5>

      <button>Download Backup</button>

      <button>Download Backup</button>
    </div>
  );
};

export default Exporter;
