import React from 'react';
import useGroceries from '../../../context/GroceriesContext/GroceriesContext';
import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import saveGroceryBackup from './saveGroceryBackup';
import useStyles from './styles';

const Backup = () => {
  const classes = useStyles();

  const { allGroceryItems } = useGroceries();

  return (
    <div className={classes.backupDiv}>
      <GetAppIcon className={classes.importIcon} />
      <label className={classes.inputLabel}>
        Export Grocery Data
      </label>

      <button className={classes.backupButton} onClick={() => saveGroceryBackup(allGroceryItems)}>
        Download Backup <span className={classes.downloadArrow}><ArrowDownwardIcon /></span>
      </button>
    </div>
  );
}

export default Backup;
