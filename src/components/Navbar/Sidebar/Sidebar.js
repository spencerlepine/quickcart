import React from "react";
import KitchenIcon from '@material-ui/icons/Kitchen';
import EmojiObjects from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logout from "../../Logout/Logout"
import { Link  } from "react-router-dom";

import useStyles from "./styles.js";

const Sidebar = ({ toggleMenu }) => {
    const classes = useStyles();

    return (
      <div className={classes.sidebar}>
        <Link className={classes.sidebarLink}
          to="/"
          onClick={() => toggleMenu(false)}
        >
          <ListAltIcon fontSize="large"/>
          <p>Browse</p>
        </Link>

        <Link
          style={{ justifySelf: "center" }}
          className={classes.sidebarLink}
          to="/form"
          onClick={() => toggleMenu(false)}
        >
          <AddCircleOutlineIcon fontSize="large" />
          <p>Create</p>
        </Link>

        <Link className={classes.sidebarLink}
        to="/cart"
        onClick={() => toggleMenu(false)}
        >
          <ShoppingCartIcon fontSize="large" />
          <p>Cart</p>
        </Link>

        <Link
          className={`${classes.sidebarLink} ${classes.recommendedIcon}`}
          to="/recommended"
          onClick={() => toggleMenu(false)}
        >
          <EmojiObjects fontSize="large" />
          <p>Suggested</p>
        </Link>

        <Link
          className={`${classes.sidebarLink} ${classes.pantryIcon}`}
          to="/pantry"
          onClick={() => toggleMenu(false)}
        >
          <KitchenIcon fontSize="large" />
          <p>Pantry</p>
        </Link>

        <Link
          className={`${classes.sidebarLink} ${classes.settingIcon}`}
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

export default Sidebar