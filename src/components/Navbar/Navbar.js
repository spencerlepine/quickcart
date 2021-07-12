import React from 'react';
import OpenCartBtn from '../OpenCartBtn/OpenCartBtn';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeLink from '../HomeLink/HomeLink';
import Sidebar from './Sidebar/Sidebar';
import useStyles from './styles.js';

const Navbar = ({ toggleElem: toggleMenu, showElem: showMenu }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navBar}>
        <div className={classes.navbarContainer} >
          <div className={classes.menuToggleBtn}>
            {showMenu ? (
              <CloseIcon fontSize='large' onClick={() => toggleMenu(false)} />
            ) : (
              <MenuIcon fontSize='large' onClick={() => toggleMenu(true)} />
            )}
          </div>

          {showMenu && <Sidebar toggleMenu={toggleMenu} />}

          <HomeLink />

          <OpenCartBtn />
        </div>
      </div>
      <div className={classes.navBarSpacing}></div>
    </>
  );
};

export default Navbar;
