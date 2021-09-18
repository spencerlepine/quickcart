import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';

const MissingMessage = ({ message, iconType, child }) => {
  const classes = useStyles();

  return (
    <div className={`missing-message ${classes.messageContainer}`}>
      <p>{message}</p>
      {child}
      {/* TODO: <p>{iconType}</p> */}
    </div>
  );
};

export default MissingMessage;

MissingMessage.propTypes = {
  child: PropTypes.node,
  message: PropTypes.string.isRequired,
  iconType: PropTypes.oneOf(['lonely_shiba', 'search', 'image']),
};

MissingMessage.defaultProps = {
  manualDisplay: 'lonely_shiba',
};