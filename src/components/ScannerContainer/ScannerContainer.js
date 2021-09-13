import React, { useState } from 'react';
import BarcodeReader from 'react-webcam-barcode-scanner';
import { useHistory } from 'react-router-dom';
import { CREATE } from 'config/constants/routeConstants';
import useForm from 'context/FormContext/FormContext';
import useStyles from './styles.js';

const ScannerContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setFormEntries, setEditingMode } = useForm();

  // camera, searching, selection, error (restart, manual)
  const [scanMode, setScanMode] = useState('camera');
  const [scanResult, setScanResult] = useState('');


  const scanProductsFromUPC = (upcString, callback) => {
    console.log('searching products online');
    callback(null, {});
  };

  const handleError = err => {
    setScanMode('error');
    console.error(err);
  };

  const handleScan = data => {
    setScanMode('loading');
    setScanResult(data);

    scanProductsFromUPC(scanResult, (err, result) => {
      if (err) {
        handleError();
      } else {
        setEditingMode(true);
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
        <BarcodeReader
          width={500}
          height={700}
          onUpdate={handleUpdate}
        />
      )}

      {scanMode === 'error' && (<React.Fragment>
        <button onClick={() => setScanMode('camera')}>Try Again</button>
        <button onClick={() => history.push(CREATE)}>ENTER MANUALLY</button>
      </React.Fragment>)}

      <p>{scanResult}</p>
    </div>
  );
};

export default ScannerContainer;
