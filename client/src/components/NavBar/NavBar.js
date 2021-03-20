import React from "react"
import { Link, useLocation } from "react-router-dom"
import useStyles from "./styles"

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
        <div className={classes.navbarContainer}>
            <Link style={highlightLink('/', pathname)} className={classes.link} to="/">🏠Home</Link>
            <Link style={highlightLink('/overview', pathname)} className={classes.link} to="/overview">📒Overview</Link>
            <Link style={highlightLink('/form', pathname)} className={classes.link} to="/form">🆕Add Item</Link>
            <Link style={highlightLink('/cart', pathname)} className={classes.link} to="/cart">🛒Cart</Link>
        </div>
    )
}

export default NavBar
