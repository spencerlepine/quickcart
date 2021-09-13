import React, { useState } from 'react';
import BarcodeReader from 'react-webcam-barcode-scanner';
import { useHistory } from 'react-router-dom';
import { CREATE } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const ScannerContainer = () => {
  const classes = useStyles();
  const history = useHistory();

  // camera, searching, selection, error (restart, manual)
  const [scanMode, setScanMode] = useState('camera');
  const [scanResult, setScanResult] = useState('');

  const scanProductsFromUPC = (upcString, callback) => {
    callback();
  };

  const handleScan = data => {
    setScanMode('loading');
    setScanResult(data);

    scanProductsFromUPC(scanResult, () => {
      history.push(CREATE);
    });
  };

  const handleError = err => {
    setScanMode('camera');
    console.error(err);
  };

  const handleUpdate = (err, result) => {
    if (result) {
      handleScan(result.text);
    } else {
      handleError('Not found');
    }
  };

  return (
    <div className={`upc-container ${classes.upcContainer}`}>
      {scanMode === 'camera' && <BarcodeReader
        width={500}
        height={500}
        onUpdate={handleUpdate}
      />}

      <p>{scanResult}</p>
    </div>
  );
};

export default ScannerContainer;
