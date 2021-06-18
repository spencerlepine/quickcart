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
import { FoodFactsProvider } from "./context/FoodFactsContext/FoodFactsContext"
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ProductOnboardProvider } from './context/ProductOnboardContext/ProductOnboardContext';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <FoodFactsProvider>
      <NotificationProvider>
        <RecommendedProvider>
          <GroceriesProvider>
            <CartProvider>
              <SearchProvider>
                <FormProvider>
                  <ProductOnboardProvider>
                    <CategoriesProvider>
                      <AuthProvider>
                        <App />
                      </AuthProvider>
                    </CategoriesProvider>
                  </ProductOnboardProvider>
                </FormProvider>
              </SearchProvider>
            </CartProvider>
          </GroceriesProvider>
        </RecommendedProvider>
      </NotificationProvider>
    </FoodFactsProvider>
  </Router >,
  document.getElementById('root')
);
