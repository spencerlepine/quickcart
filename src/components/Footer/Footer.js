import React from 'react';
import gitHubLogo from '../../images/github.svg';
import twitterLogo from '../../images/twitter.svg';
import { TWITTER_LINK, GITHUB_LINK } from '../../constants/socialsConstants';
import useStyles from './styles.js';

const Footer = () => {
  const classes = useStyles();
  const currentDate = new Date();

  return (
    <footer className={classes.Footer}>
      <div className={classes.footerContainer}>
        <p>&#169;{currentDate.getFullYear()} Spencer Lepine</p>
        <a
          className={classes.footerLink}
          target='_blank'
          rel='noreferrer'
          href={GITHUB_LINK}
        >
          <img
            src={gitHubLogo}
            alt='github'
            className={classes.footerLogo}
          ></img>
        </a>
        <a
          className={classes.footerLink}
          target='_blank'
          rel='noreferrer'
          href={TWITTER_LINK}
        >
          <img
            src={twitterLogo}
            alt='twitter'
            className={classes.footerLogo}
          ></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
