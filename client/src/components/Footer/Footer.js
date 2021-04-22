import React from "react"
import { Link} from "react-router-dom"
import useStyles from "./styles.js"

const Footer = () => {
    const classes = useStyles()
  
    return (
        <footer className={classes.Footer}>
            <Link to="/settings">Settings</Link>
        </footer>
    )
}

export default Footer
