import React from 'react';
import { Link } from 'react-router-dom';
import QuickCartLogo from '../../images/QuickCart-Logo.png';
import useStyles from './styles.js';

const HomeLink = () => {
  const classes = useStyles();

  return (
    <Link
      className={classes.logoLink}
      to='/'
    >
      <img src={QuickCartLogo} alt='QuickCart Logo'></img>
    </Link>
  );
};

export default HomeLink;
