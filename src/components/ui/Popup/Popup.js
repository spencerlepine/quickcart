import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';

const Popup = ({ DefaultElem, PopupElem, manualDisplay }) => {
  const classes = useStyles();
  const [displayPopup, setDisplayPopup] = useState(manualDisplay);

  const togglePopup = () => {
    setDisplayPopup(prevBool => !prevBool);
  };

  const Component = displayPopup ? (
    <div className={`detailsPopup ${classes.detailsPopup}`}>
      <div className={`popupChild ${classes.popupChild}`}>{PopupElem}</div>
    </div>) : DefaultElem;

  return (
    <div className={`popup-container ${classes.popupContainer}`} onClick={togglePopup} role={'presentation'}>
      {Component}
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  DefaultElem: PropTypes.object.isRequired,
  PopupElem: PropTypes.object.isRequired,
  manualDisplay: PropTypes.bool,
};

Popup.defaultProps = {
  manualDisplay: false,
};