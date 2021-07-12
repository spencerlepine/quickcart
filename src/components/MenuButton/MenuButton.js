import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Sidebar from './Sidebar/Sidebar';
import withAutoClose from '../../hooks/useAutoClose/useAutoClose';
import useStyles from './styles.js';

const MenuButton = ({ toggleElem: toggleMenu, showElem: showMenu }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.menuToggleBtn}>
        {showMenu ? (
          <CloseIcon fontSize='large' onClick={() => toggleMenu(false)} />
        ) : (
          <MenuIcon fontSize='large' onClick={() => toggleMenu(true)} />
        )}
      </div>

      {showMenu && <Sidebar toggleMenu={toggleMenu} />}
    </>
  );
};

export default withAutoClose(MenuButton);
