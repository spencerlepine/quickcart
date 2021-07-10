import React, { useState } from 'react';
import useStyles from './styles.js';

const DetailsPopup = ({ CardComponent, DetailsComponent }) => {
  const classes = useStyles();
  const [displayPopup, setDisplayPopup] = useState(false);

  const handleClick = () => {
    setDisplayPopup(prevBool => !prevBool);
  }

  const Component = displayPopup ? DetailsComponent : CardComponent;
  return (
    <div className={classes.detailsPopup} onClick={handleClick}>
      {Component}
    </div>
  );
}

export default DetailsPopup;