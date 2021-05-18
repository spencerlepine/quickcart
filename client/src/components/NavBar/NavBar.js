import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import EmojiObjects from "@material-ui/icons/EmojiObjects";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import KitchenIcon from '@material-ui/icons/Kitchen';
import useStyles from "./styles.js";
import Logout from "../Logout/Logout"

const NavBar = () => {
  const classes = useStyles();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartLength = useSelector((state) => state.cart.length);

  const toggleMenu = (inputToggle = null) => {
    setMenuOpen((prevState) => (
      inputToggle === null ? !prevState : inputToggle
    ));
  };

  const Sidebar = () => {
    return (
      <div className={classes.sidebar}>
        <Link className={classes.link}
          to="/"
          onClick={() => toggleMenu(false)}
        >
          <ListAltIcon fontSize="large"/>
          <p>Browse</p>
        </Link>

        <Link
          style={{ justifySelf: "center" }}
          className={classes.link}
          to="/form"
          onClick={() => toggleMenu(false)}
        >
          <AddCircleOutlineIcon fontSize="large" />
          <p>Create</p>
        </Link>

        <Link className={classes.link}
        to="/cart"
        onClick={() => toggleMenu(false)}
        >
          <ShoppingCartIcon fontSize="large" />
          <p>Cart</p>
        </Link>

        <Link
          className={`${classes.link} ${classes.recommendedIcon}`}
          to="/recommended"
          onClick={() => toggleMenu(false)}
        >
          <EmojiObjects fontSize="large" />
          <p>Suggested</p>
        </Link>

        <Link
          className={`${classes.link} ${classes.pantryIcon}`}
          to="/pantry"
          onClick={() => toggleMenu(false)}
        >
          <KitchenIcon fontSize="large" />
          <p>Pantry</p>
        </Link>

        <Link
          className={`${classes.link} ${classes.settingIcon}`}
          to="/settings"
          onClick={() => toggleMenu(false)}
        >
          <SettingsIcon fontSize="large" />
          <p>Settings</p>
        </Link>

        <Logout />
      </div>
    );
  };

  return (
    <>
      <div className={classes.navBar}>
        <div className={classes.navbarContainer}>
          <div className={classes.menuToggleBtn}>
            {menuOpen ? (
              <CloseIcon fontSize="large"  onClick={() => toggleMenu(false)} />
            ) : (
              <MenuIcon fontSize="large" onClick={() => toggleMenu(true)} />
            )}
          </div>

          {menuOpen && <Sidebar />}

          <Link
            style={{ marginLeft: "auto" }}
            className={classes.link}
            to="/cart"
          >
            <div className={classes.cartLink}>
              <ShoppingCartIcon fontSize="large" color="action" />
              {cartLength > 0 && <p>{cartLength}</p>}
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.navBarSpacing}></div>
    </>
  );
};

export default NavBar;
