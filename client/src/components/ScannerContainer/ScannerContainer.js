import React, { useState } from 'react';
import BarcodeReader from 'react-webcam-barcode-scanner';
import { useHistory, Link } from 'react-router-dom';
import { CREATE } from 'config/constants/routeConstants';
import useForm from 'context/FormContext/FormContext';
import { fetchUPCItem as fetchUPCItemA } from 'api/spoonacular';
import { fetchUPCItem as fetchUPCItemB } from 'api/openfoodfacts';
import useStyles from './styles.js';

const ScannerContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setFormEntries, setEditingMode } = useForm();

  // camera, searching, selection, error (restart, manual)
  const [scanMode, setScanMode] = useState('camera');
  const [scanResult, setScanResult] = useState('');

  const scanProductsFromUPC = (upcString, callback) => {
    // Nested callback to QUERY spoonacular database, and then openfoodfacts
    fetchUPCItemB(upcString, (err, productDetails) => {
      if (productDetails) {
        callback(null, productDetails);
      } else {
        if (err) {
          console.log(err);
        }

        fetchUPCItemA(upcString, (err, productDetails) => {
          if (productDetails) {
            callback(null, productDetails);
          } else {
            callback(err);
          }
        });
      }
    });
  };

  const handleError = err => {
    setScanMode('error');
    console.error(err);
  };

  const handleScan = data => {
    setScanMode('loading');
    setScanResult(data);

    scanProductsFromUPC(data, (err, result) => {
      if (err) {
        handleError();
      } else {
        setFormEntries(result);
        history.push(CREATE);
      }
    });
  };

  const handleUpdate = (err, result) => {
    if (result) {
      handleScan(result.text);
    }
  };

  return (
    <div className={`upc-container ${classes.upcContainer}`}>
      {scanMode === 'camera' && (
        <React.Fragment>
          <h4>Unable to SCAN? <Link to={CREATE}>ENTER MANUALLY</Link></h4>
          <BarcodeReader
            width={500}
            height={700}
            onUpdate={handleUpdate}
          />
        </React.Fragment>
      )}

      {
        scanMode === 'error' && (<React.Fragment>
          <button onClick={() => setScanMode('camera')}>Try Again</button>
          <button onClick={() => history.push(CREATE)}>ENTER MANUALLY</button>
        </React.Fragment>)
      }

      <p>{scanResult}</p>
    </div >
  );
};

export default ScannerContainer;
