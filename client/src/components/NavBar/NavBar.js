import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import SettingsIcon from "@material-ui/icons/Settings"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import ListAltIcon from "@material-ui/icons/ListAlt"
import EmojiObjects from "@material-ui/icons/EmojiObjects"
import useStyles from "./styles.js"

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {
  const classes = useStyles()

  const [menuOpen, setMenuOpen] = useState(false)

  const cartLength = useSelector((state) => state.cart.length)
 
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const Sidebar = () => {
    return (
      <div onClick={toggleMenu} className={classes.sidebar}>
        <Link className={classes.link} to="/">
          <ListAltIcon fontSize="large" />
          <p>Browse</p>
        </Link>

        <Link
          style={{justifySelf: "center" }}
          className={classes.link}
          to="/form"
        >
          <AddCircleOutlineIcon fontSize="large" />
          <p>Create</p>
        </Link>

        <Link
          className={`${classes.link} ${classes.recommendedIcon}`}
          to="/recommended"
        >
          <EmojiObjects fontSize="large" />
          <p>Suggested</p>
        </Link>

        <Link
          className={`${classes.link} ${classes.settingIcon}`}
          to="/settings"
        >
          <SettingsIcon fontSize="large" />
          <p>Settings</p>
        </Link>
      </div>
    )
  }

  return (
    <><div className={classes.navBar}>
      <div className={classes.navbarContainer}>
        <div onClick={toggleMenu} className={classes.menuToggleBtn}>
          {menuOpen
            ?
            <CloseIcon fontSize="large" />
            :
            <MenuIcon fontSize="large" />
          }
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
    <div className={classes.navBarSpacing}></div></>
  )
}

export default NavBar
