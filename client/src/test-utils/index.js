import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { AuthContext } from 'context/AuthContext/AuthContext';
import { CartProvider } from 'context/CartContext/CartContext';
import { FormProvider } from 'context/FormContext/FormContext';
import { NotificationsProvider } from 'context/NotificationsContext/NotificationsContext';
import { ProductsProvider } from 'context/ProductsContext/ProductsContext';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import currentUser from 'currentUser';
import '@testing-library/jest-dom';

// Need to mock firebase? (try npm firebase-mock?)
// https://stackoverflow.com/questions/52043886/how-do-you-mock-firebase-firestore-methods-using-jest
// https://stackoverflow.com/questions/61686830/error-mocking-firebase-admin-in-jest-typeerror-admin-firestore-is-not-a-funct

window.toTitleCase = str => {
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const history = createBrowserHistory();

const AllTheProviders = ({ children }) => (
  // <ThemeProvider theme="light">
  <AuthContext.Provider value={currentUser}>
    <NotificationsProvider>
      <ProductsProvider>
        <CartProvider>
          <FormProvider>
            <Router history={history}>
              {children}
            </Router>
          </FormProvider>
        </CartProvider>
      </ProductsProvider>
    </NotificationsProvider>
  </AuthContext.Provider>
  // </ThemeProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });


// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
