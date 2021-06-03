import React from "react";
import KitchenIcon from '@material-ui/icons/Kitchen';
import EmojiObjects from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SearchIcon from '@material-ui/icons/Search';
import Logout from "../../Logout/Logout"
import { Link  } from "react-router-dom";

import useStyles from "./styles.js";
import { PANTRY, RECOMMENDED, SETTINGS, HOME, FORM, SEARCH } from "../../../constants/routeConstants";

const Sidebar = ({ toggleMenu }) => {
    const classes = useStyles();

    return (
      <div className={classes.sidebar}>
        <Link className={classes.sidebarLink}
          to={HOME}
          onClick={() => toggleMenu(false)}
        >
          <ListAltIcon fontSize="large"/>
          <p>Browse</p>
        </Link>

        <Link
          style={{ justifySelf: "center" }}
          className={classes.sidebarLink}
          to={FORM}
          onClick={() => toggleMenu(false)}
        >
          <AddCircleOutlineIcon fontSize="large" />
          <p>Create</p>
        </Link>
        
        <Link
          style={{ justifySelf: "center" }}
          className={classes.sidebarLink}
          to={SEARCH}
          onClick={() => toggleMenu(false)}
        >
          <SearchIcon fontSize="large" />
          <p>Find</p>
        </Link>


        <Link
          className={`${classes.sidebarLink} ${classes.recommendedIcon}`}
          to={RECOMMENDED}
          onClick={() => toggleMenu(false)}
        >
          <EmojiObjects fontSize="large" />
          <p>Suggested</p>
        </Link>

        <Link
          className={`${classes.sidebarLink} ${classes.pantryIcon}`}
          to={PANTRY}
          onClick={() => toggleMenu(false)}
        >
          <KitchenIcon fontSize="large" />
          <p>Pantry</p>
        </Link>

        <Link
          className={`${classes.sidebarLink} ${classes.settingIcon}`}
          to={SETTINGS}
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