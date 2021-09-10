import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
// import { ThemeProvider } from 'my-ui-lib';
import { AuthProvider } from '../context/AuthContext/AuthContext';
import { CartProvider } from '../context/CartContext/CartContext';
import { FormProvider } from '../context/FormContext/FormContext';
import { NotificationsProvider } from '../context/NotificationsContext/NotificationsContext';
import { ProductsProvider } from '../context/ProductsContext/ProductsContext';

const AllTheProviders = ({ children }) => (
  // <ThemeProvider theme="light">
  <CartProvider>
    <FormProvider>
      <NotificationsProvider>
        <ProductsProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ProductsProvider>
      </NotificationsProvider>
    </FormProvider>
  </CartProvider>
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
