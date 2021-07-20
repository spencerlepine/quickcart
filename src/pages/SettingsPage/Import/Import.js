import React from 'react';
import { useHistory } from 'react-router';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useGroceries from '../../../context/GroceriesContext/GroceriesContext';
import useNotification from '../../../context/NotificationContext/NotificationContext.js';
import formatGroceryObj from '../../../modules/formatGroceryObj';
import useStyles from './styles';

const Import = () => {
  const classes = useStyles();
  const history = useHistory();

  const { createGroceryItem } = useGroceries();
  const { setCurrentNotification } = useNotification();

  const importData = async ({ target }) => {
    var fr = new FileReader();

    fr.readAsText(target.files[0]);

    fr.onload = await function () {
      let storageAccessed;
      try {
        storageAccessed = JSON.parse(fr.result);
      } catch (err) {
        const importMessage = {
          name: 'Invalid File!',
          message: `please select a valid .txt file`,
        };
        setCurrentNotification(importMessage);
        return;
      }

      const importCount = typeof storageAccessed === 'object' ? storageAccessed.length : 0;
      if (!window.confirm('Import ' + importCount + ' items?')) {
        return;
      }

      storageAccessed.forEach((grocery) => {
        const filteredObj = formatGroceryObj(grocery);

        setTimeout(() => {
          createGroceryItem(filteredObj);
        }, 130);
      })

      history.push('/');
    }
  }

  return (
    <div className={classes.importDiv}>
      <CloudDownloadIcon className={classes.importIcon} />
      <label className={classes.inputLabel}>
        Import Backup File
      </label>
      <br />
      <input
        className={classes.fileInput}
        onChange={importData}
        type='file'
        name='inputfile'
        id='inputfile'
      ></input>
    </div>
  )
}

export default Import;