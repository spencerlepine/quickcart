import React from 'react';
import PropTypes from 'prop-types';
import { NotificationsProvider } from 'context/NotificationsContext/NotificationsContext';
import { AuthProvider } from 'context/AuthContext/AuthContext';
import { ProductsProvider } from 'context/ProductsContext/ProductsContext';
import { CartProvider } from 'context/CartContext/CartContext';
import NotificationsPopup from 'components/ui/NotificationsPopup/NotificationsPopup';
import { FormProvider } from 'context/FormContext/FormContext';

import Footer from 'components/ui/Footer/Footer';
import Navbar from 'components/ui/Navbar/Navbar';
import useStyles from './styles.js';

const ViewLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AuthProvider>
        <NotificationsProvider>
          <ProductsProvider>
            <CartProvider>
              <NotificationsPopup />
              <FormProvider>
                <Navbar />
                <div className={classes.navbarSpacing}></div>
                <div className={`${classes.content}`}>{children}</div>
                <div className={classes.footerSpacing}></div>
                <Footer />
              </FormProvider>
            </CartProvider>
          </ProductsProvider>
        </NotificationsProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

export default ViewLayout;

ViewLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
