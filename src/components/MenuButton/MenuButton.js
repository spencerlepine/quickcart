import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Sidebar from './Sidebar/Sidebar';
import withAutoClose from '../../hooks/useAutoClose/useAutoClose';
import useStyles from './styles.js';

const MenuButton = () => {
  const classes = useStyles();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className={classes.menuToggleBtn}>
        {showMenu ? (
          <CloseIcon fontSize='large' onClick={() => setShowMenu(false)} />
        ) : (
          <MenuIcon fontSize='large' onClick={() => setShowMenu(true)} />
        )}
      </div>

      {showMenu && <Sidebar toggleMenu={toggleMenu} />}
    </>
  );
};

export default withAutoClose(MenuButton);
