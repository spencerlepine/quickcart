import React from 'react';
import { useHistory } from 'react-router';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useProducts from 'context/ProductsContext/ProductsContext';
import useStyles from './styles';

const BackupImporter = () => {
  const classes = useStyles();
  const history = useHistory();

  const { addSavedProduct } = useProducts();

  const importData = async ({ target }) => {
    const fr = new FileReader();

    fr.readAsText(target.files[0]);

    const loadCallback = () => {
      try {
        const storageAccessed = JSON.parse(fr.result);
        const categories = Object.values(storageAccessed);
        const products = categories.reduce((arr, categoryObj) => arr = arr.concat(Object.values(categoryObj)), []);


        const importCount = products.length;
        if (!window.confirm(`Import ${importCount} items?`)) {
          return;
        }

        products.forEach(grocery => {
          addSavedProduct(grocery, grocery['category']);
        });

        history.push('/');
      } catch (err) {
        console.log(err);
        return;
      }
    };

    fr.onload = await loadCallback;
  };

  return (
    <div className={classes.importDiv}>
      <CloudDownloadIcon className={classes.importIcon} />
      <label className={classes.inputLabel} htmlFor='inputfile'>
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
  );
};

export default BackupImporter;