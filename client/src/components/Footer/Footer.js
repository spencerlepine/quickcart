import React from "react"
import useStyles from "./styles.js"

const Footer = () => {
    const classes = useStyles()
    
    const currentDate = new Date()

    return (
        <footer className={classes.Footer}>
            <p>&#169;{currentDate.getFullYear()} Spencer Lepine</p>
        </footer>
    )
}

export default Footer
