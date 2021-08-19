import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import CartButton from './CartButton/CartButton';
import QuickCartLogo from 'assets/images/QuickCart-Logo.png';
import useStyles from './styles.js';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="navbar">
      <Sidebar />

      <Link
        className={classes.logoLink}
        to='/'
      >
        <img src={QuickCartLogo} alt='QuickCart Logo'></img>
      </Link>

      <CartButton />
    </div>
  );
};

export default Navbar;
