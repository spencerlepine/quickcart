import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  const height = '1em';
  const bgcolor = (percent => {
    const r = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100);
    const g = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100);
    return `rgb(${r},${g},0)`;
  })(progress); // 'red';

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: '#c7c7c7',
    borderRadius: 40,
    padding: '4px',
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};