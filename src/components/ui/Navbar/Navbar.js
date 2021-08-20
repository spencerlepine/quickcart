import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import CartButton from './CartButton/CartButton';
import QuickCartLogo from 'assets/images/QuickCart-Logo.png';
import useStyles from './styles.js';

const Navbar = () => {
  const classes = useStyles();

  return (
    <navbar className={`navbar ${classes.navbar}`}>
      <div className={`navbarContainer ${classes.navbarContainer}`}>
        <Sidebar />

        <Link
          className={classes.logoLink}
          to='/'
        >
          <img src={QuickCartLogo} alt='QuickCart Logo' className={classes.logoLink}></img>
        </Link>

        <CartButton />
      </div>
    </navbar >
  );
};

export default Navbar;
