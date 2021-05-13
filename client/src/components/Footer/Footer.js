import React from "react"
import useStyles from "./styles.js"
import gitHubLogo from "../../images/github.svg"
import twitterLogo from "../../images/twitter.svg"
import { Link } from "react-router-dom"


const Footer = () => {
  const classes = useStyles()

  const currentDate = new Date()

  return (
    <footer className={classes.Footer}>
      <div className={classes.footerContainer}>
        <p>&#169;{currentDate.getFullYear()} Spencer Lepine</p>
        <a
          className={classes.footerLink}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/spencerlepine"
        >
          <img
            src={gitHubLogo}
            alt="github"
            className={classes.footerLogo}
          ></img>
        </a>
        <a
          className={classes.footerLink}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/SpencerLepine"
        >
          <img
            src={twitterLogo}
            alt="twitter"
            className={classes.footerLogo}
          ></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer
