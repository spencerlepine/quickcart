import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';

const Popup = ({ DefaultElem, PopupElem }) => {
  const classes = useStyles();
  const [displayPopup, setDisplayPopup] = useState(false);

  const togglePopup = () => {
    setDisplayPopup(prevBool => !prevBool);
  };

  const Component = displayPopup ? PopupElem : DefaultElem;
  return (
    <div className={`detailsPopup ${classes.detailsPopup}`} onClick={togglePopup} role={'presentation'}>
      {Component}
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  DefaultElem: PropTypes.object.isRequired,
  PopupElem: PropTypes.object.isRequired,
};
