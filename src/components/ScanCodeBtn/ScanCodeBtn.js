import React, { useState } from 'react';
// import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import DetailsPopup from '../DetailsPopup/DetailsPopup';
import useStyles from './styles';
const BarcodeScannerComponent = () => null;

const ScanCodeBtn = ({ setUpcSearch, handleSubmit }) => {
  const classes = useStyles();
  const [upcScan, setUpcScan] = useState(null);

  const handleScan = (err, result) => {
    if (result) {
      const newBarcode = result.text;
      setUpcScan(newBarcode);
      setUpcSearch(newBarcode);
      handleSubmit(newBarcode);
    }
  }

  const resetScanner = () => {
    setUpcScan(null);
  }

  if (!upcScan) {
    return (
      <DetailsPopup
        CardComponent={(
          <div className={classes.scanCodeDiv}>
            <button className={classes.scanCodeBtn}>Scan Code</button>
          </div>
        )}
        DetailsComponent={(
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={handleScan}
          />
        )}
      />
    );
  }
  else {
    return (
      <button className={classes.tryAgainBtn} onClick={resetScanner}>Try Again</button>
    )

  }
}

export default ScanCodeBtn;