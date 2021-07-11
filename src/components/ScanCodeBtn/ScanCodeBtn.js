import React from 'react';
import useStyles from './styles';

const ScanCodeBtn = ({ setUPCResult }) => {
  const classes = useStyles();

  const handleClick = async () => {
    // open the camera overlay
    alert('opening the camera boss');
  }

  return (
    <div className={classes.scanCodeDiv}>
      <button className={classes.scanCodeBtn} onClick={handleClick}>Scan Code</button>
    </div>
  )
}

export default ScanCodeBtn;