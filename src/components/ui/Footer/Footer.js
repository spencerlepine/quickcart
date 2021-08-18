import React from 'react';
import useStyles from './styles.js';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default Footer;
