import React from "react"
import { Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import SettingsIcon from "@material-ui/icons/Settings"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import ListAltIcon from "@material-ui/icons/ListAlt"
import useStyles from "./styles.js"

const NavBar = () => {
    const classes = useStyles()
    const { pathname } = useLocation()
    
    const highlightLink = (path, thisPath) => {
        return ({
            backgroundColor: pathname === path ? "#171717" : "#333333",
            color: pathname === path ? "#6f6f6f" : "#e2e2e6",
        })
    }

    return (
        <div className={classes.navBar}>
            <div className={classes.navbarContainer}>
                <Link
                    style={highlightLink('/', pathname)}
                    className={classes.link}
                    to="/">
                    <ListAltIcon fontSize="large" /><p>Overview</p>
                </Link>

                <Link
                    style={{...highlightLink('/form', pathname), justifySelf: "center"}}
                    className={classes.link}
                    to="/form">
                    <AddCircleOutlineIcon fontSize="large" /><p>Add Item</p>
                </Link>

                {pathname === '/' && <SearchBar />}

                <Link
                    style={{ ...highlightLink('/cart', pathname), marginLeft: "auto"}}
                    className={classes.link}
                    to="/cart">
                        <ShoppingBasketIcon fontSize="large" /><p>Basket</p>
                </Link>

                <Link
                    style={{ ...highlightLink('/settings', pathname), marginLeft: "auto"}}
                    className={classes.link}
                    to="/settings">
                        <SettingsIcon fontSize="large" />
                </Link>
            </div>
        </div>
    )
}

export default NavBar
