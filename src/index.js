import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./context/AuthContext/AuthContext"
import { GroceriesProvider } from "./context/GroceriesContext/GroceriesContext"
import { SearchProvider } from "./context/SearchContext/SearchContext"
import { FormProvider } from "./context/FormContext/FormContext"
import { CartProvider } from "./context/CartContext/CartContext"
import { CategoriesProvider } from "./context/CategoriesContext/CategoriesContext"
import { RecommendedProvider } from "./context/RecommendedContext/RecommendedContext"
import { NotificationProvider } from "./context/NotificationContext/NotificationContext"

ReactDOM.render(
  <NotificationProvider>
    <RecommendedProvider>
      <GroceriesProvider>
        <CartProvider>
          <SearchProvider>
            <FormProvider>
              <AuthProvider>
                <CategoriesProvider>
                  <App />
                </CategoriesProvider>
              </AuthProvider>
            </FormProvider>
          </SearchProvider>
        </CartProvider>
      </GroceriesProvider>
    </RecommendedProvider>
  </NotificationProvider>,
  document.getElementById('root')
);
