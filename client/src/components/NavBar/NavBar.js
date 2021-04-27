import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import SearchBar from "./SearchBar/SearchBar"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import SettingsIcon from "@material-ui/icons/Settings"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import ListAltIcon from "@material-ui/icons/ListAlt"
import useStyles from "./styles.js"

const NavBar = () => {
  const classes = useStyles()
  const { pathname } = useLocation()

  const cartLength = useSelector((state) => state.cart.length)

  const highlightLink = (path) => {
    return {
      backgroundColor: pathname === path ? "#171717" : "#333333",
      color: pathname === path ? "#6f6f6f" : "#e2e2e6",
    }
  }

  return (
    <div className={classes.navBar}>
      <div className={classes.navbarContainer}>
        <Link style={highlightLink("/")} className={classes.link} to="/">
          <ListAltIcon fontSize="large" />
          <p>Overview</p>
        </Link>

        <Link
          style={{ ...highlightLink("/form"), justifySelf: "center" }}
          className={classes.link}
          to="/form"
        >
          <AddCircleOutlineIcon fontSize="large" />
          <p>Add Item</p>
        </Link>

        {pathname === "/" && <SearchBar />}

        <Link
          style={{ ...highlightLink("/cart"), marginLeft: "auto" }}
          className={classes.link}
          to="/cart"
        >
          <div className={classes.cartLink}>
            <ShoppingCartIcon fontSize="large" color="action" />
            {cartLength > 0 && <p>{cartLength}</p>}
          </div>
        </Link>

        <Link
          style={{ ...highlightLink("/settings") }}
          className={`${classes.link} ${classes.settingIcon}`}
          to="/settings"
        >
          <SettingsIcon fontSize="large" />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
