import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import { Link } from 'react-router-dom';
import { LOGIN, SIGNUP } from 'config/constants/routeConstants';
import demoImage from 'assets/images/demo_transparent.png';
import useStyles from './styles.js';

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <div className='welcome-container'>
      <p className={classes.appDescription}>
        Organize and budget a personal grocery cart for easy shopping
      </p>

      <div className={classes.accountRedirect}>
        <Link to={SIGNUP} className={classes.accountLink}>
          Sign up
        </Link>
        <Link to={LOGIN} className={classes.loginLink}>
          Log in
        </Link>
      </div>

      <img
        className={classes.demoImg}
        src={demoImage}
        alt='QuickCart Screenshot'
      ></img>
    </div>
  );
};

const isAuthPage = true;
export default withAuthRedirect(WelcomePage, isAuthPage);
