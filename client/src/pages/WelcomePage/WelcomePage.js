import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import { Link } from 'react-router-dom';
import { LOGIN, SIGNUP } from 'config/constants/routeConstants';
import demoImage from 'assets/images/demo_transparent.png';
import useStyles from './styles.js';

import searchDemoImage from 'assets/images/search-screenshot.png';
import cartDemoImage from 'assets/images/cart-screenshot.png';
import analyzerDemoImage from 'assets/images/analyzer-screenshot.png';
import savedDemoImage from 'assets/images/saved-screenshot.png';
import scanDemoImage from 'assets/images/scan-upc.png';
import customizeDemoImage from 'assets/images/customize-product.png';

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

      <div className={classes.showcaseFigure}>
        <h2>Generate a Shopping List</h2>
        <img
          className={classes.showcaseImg}
          src={cartDemoImage}
          alt='generate a shopping list on QuickCart'
        ></img>
      </div>

      <div className={classes.showcaseFigure}>
        <h2>Search Products</h2>
        <img
          className={classes.showcaseImg}
          src={searchDemoImage}
          alt='search products on QuickCart'
        ></img>
      </div>

      <div className={classes.showcaseFigure}>
        <h2>Scan a Barcode</h2>
        <img
          className={classes.showcaseImg}
          src={scanDemoImage}
          alt='scan UPC codes for products on QuickCart'
        ></img>
      </div>

      <div className={classes.showcaseFigure}>
        <h2>Analyze the Cart</h2>
        <img
          className={classes.showcaseImg}
          src={analyzerDemoImage}
          alt='analyze cart items on QuickCart'
        ></img>
      </div>

      <div className={classes.showcaseFigure}>
        <h2>Customize Product Details</h2>
        <img
          className={classes.showcaseImg}
          src={customizeDemoImage}
          alt='customize product details on QuickCart'
        ></img>
      </div>

      <div className={classes.showcaseFigure}>
        <h2>Save Favourite Products</h2>
        <img
          className={classes.showcaseImg}
          src={savedDemoImage}
          alt='save a list of personal products on QuickCart'
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
