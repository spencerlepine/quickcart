import React from 'react';
import Socials from 'config/constants/socialsConstants';
import useStyles from './styles.js';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={`footer ${classes.footer}`}>
      <div className={classes.copyright}>
        <p>Built by Spencer Lepine</p>
      </div>

      <div className={classes.socials}>
        {Socials.map((social, i) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            className={classes.socialsLink}
          >
            <p>{social.name}</p>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
