import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import useOutsideClick from 'hooks/useOutsideClick/useOutsideClick';
import useStyles from './styles.js';

const Popup = ({ DefaultElem, PopupElem, manualDisplay }) => {
  const classes = useStyles();
  const [displayPopup, setDisplayPopup] = useState(manualDisplay);
  const popupRef = useRef(null);
  useOutsideClick(popupRef, () => setDisplayPopup(false));

  return (
    <React.Fragment>{
      displayPopup ? (
        <div className={`popup-container ${classes.detailsPopup}`}>
          <div ref={popupRef} className={`popupChild ${classes.popupChild}`}>
            <button className={classes.closeBtn} onClick={() => setDisplayPopup(false)}><CloseIcon fontSize={'large'} /></button>
            {PopupElem}
          </div>
        </div >
      ) : (
        <div className={`popup-container ${classes.popupContainer}`} onClick={() => setDisplayPopup(true)} role={'presentation'}>
          {DefaultElem}
        </div>
      )}</React.Fragment>
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