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

jest.mock('config/firebase', () => ({
  auth: null,
  db: null,
}));

window.toTitleCase = str => {
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const history = createBrowserHistory();

const AllTheProviders = ({ children }) => (
  // <ThemeProvider theme="light">
  <AuthContext.Provider value={{ currentUser }}>
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
