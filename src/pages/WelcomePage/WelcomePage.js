import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import { Link } from 'react-router-dom';
import { LOGIN, SIGNUP } from 'config/constants/routeConstants';
import demoImage from 'assets/images/demo_transparent.png';
const searchDemoImage = ''; // import searchDemoImage from 'assets/images/demo_search.png';
const listDemoImage = ''; // import listDemoImage from 'assets/images/demo_list.png';
const customizeDemoImage = ''; // import customizeDemoImage from 'assets/images/demo_customize.png';
import useStyles from './styles.js';

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <div className={`welcome-container ${classes.welcomeContainer}`}>
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

      <div className={classes.searchFigure}>
        <h2>Search Products</h2>
        <img
          className={classes.searchDemoImg}
          src={searchDemoImage}
          alt='search products on QuickCart'
        ></img>
      </div>

      <div className={classes.shoppingListFigure}>
        <h2>Generate a Shopping List</h2>
        <img
          className={classes.listDemoImg}
          src={listDemoImage}
          alt='generate a shopping list on QuickCart'
        ></img>
      </div>

      <div className={classes.customizeFigure}>
        <h2>Customize Product Details</h2>
        <img
          className={classes.customizeDemoImg}
          src={customizeDemoImage}
          alt='customize product details on QuickCart'
        ></img>
      </div>

      <div className={classes.signupFigure}>
        <h2>Create an Account Today!</h2>
        <Link to={SIGNUP} className={classes.accountLink}>
          Sign up
        </Link>
      </div>
    </div >
  );
};

const isAuthPage = true;
export default withAuthRedirect(WelcomePage, isAuthPage);
