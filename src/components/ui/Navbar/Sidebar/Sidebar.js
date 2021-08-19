import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import KitchenIcon from '@material-ui/icons/Kitchen';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { HOME, SAVED, CREATE, CART, SETTINGS } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const SideBarLink = ({ Icon, To, Name, classes, toggleMenu }) => (
  <Link className={`${classes.sidebarLink}`}
    to={To}
    onClick={() => toggleMenu(false)}
  >
    <Icon fontSize='large' />
    <p>{Name}</p>
  </Link>
);

const Sidebar = () => {
  const classes = useStyles();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`sidebar ${classes.sidebar}`}>
      <div className={classes.menuToggleBtn}>
        {showMenu ? (
          <CloseIcon fontSize='large' onClick={() => setShowMenu(false)} />
        ) : (
          <MenuIcon fontSize='large' onClick={() => setShowMenu(true)} />
        )}
      </div>

      {showMenu &&
        <React.Fragment>
          <SideBarLink Icon={ListAltIcon} To={HOME} Name={'Explore Products'} classes={classes} toggleMenu={setShowMenu} />
          <SideBarLink Icon={KitchenIcon} To={SAVED} Name={'Saved Items'} classes={classes} toggleMenu={setShowMenu} />
          <SideBarLink Icon={AddCircleOutlineIcon} To={CREATE} Name={'Add Product'} classes={classes} toggleMenu={setShowMenu} />
          <SideBarLink Icon={ShoppingCartIcon} To={CART} Name={'Cart'} classes={classes} toggleMenu={setShowMenu} />
          <SideBarLink Icon={SettingsIcon} To={SETTINGS} Name={'Settings'} classes={classes} toggleMenu={setShowMenu} />
        </React.Fragment>
      }
    </div >
  );
};

export default Sidebar;

SideBarLink.propTypes = {
  Icon: PropTypes.any.isRequired,
  To: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
