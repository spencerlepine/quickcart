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
  const connection = useSelector((state) => state.connection.groceries)


  const highlightLink = (path) => {
    return {
      backgroundColor: pathname === path ? "#171717" : "#333333",
      color: pathname === path ? "#6f6f6f" : "#e2e2e6",
    }
  }

  const highlightStatus = (connection) => {
    return connection === "pending" || connection === "local" ? 
      "rgb(106 104 255)" : connection === "connected" ? 
        "#43c143" : "rgb(253 59 59)"
  }

  const statusStyles = {
    width: "20px", 
    height: "20px",
    position: "fixed",
    bottom: "5px",
    border: '2px solid white',
    right: "5px",
    margin: "10px",
    borderRadius: "50%",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
    backgroundColor: highlightStatus(connection)
  }

  return (
    <div className={classes.navBar}>
      <div style={statusStyles}></div>
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
