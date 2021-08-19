import React from 'react';
import useStyles from './styles.js';

const Importer = () => {
  const classes = useStyles();

  return (
    <div className={`importer ${classes.importer}`}>
      <h5>Import Backup</h5>

      <label>
        Choose File
        <input type="file" name="backup" />
      </label>
    </div >
  );
};

export default Importer;
