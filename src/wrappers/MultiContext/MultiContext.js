import React from 'react';
import { AuthProvider } from '../../context/AuthContext/AuthContext'
import { GroceriesProvider } from '../../context/GroceriesContext/GroceriesContext'
import { SearchProvider } from '../../context/SearchContext/SearchContext'
import { FormProvider } from '../../context/FormContext/FormContext'
import { CartProvider } from '../../context/CartContext/CartContext'
import { CategoriesProvider } from '../../context/CategoriesContext/CategoriesContext'
import { RecommendedProvider } from '../../context/RecommendedContext/RecommendedContext'
import { NotificationProvider } from '../../context/NotificationContext/NotificationContext'
import { FoodFactsProvider } from '../../context/FoodFactsContext/FoodFactsContext'
import { ProductOnboardProvider } from '../../context/ProductOnboardContext/ProductOnboardContext';
import { SpoonacularProvider } from '../../context/SpoonacularContext/SpoonacularContext'

const MultiContext = ({ children }) => {
  return (
    <AuthProvider>
      <FoodFactsProvider>
        <NotificationProvider>
          <RecommendedProvider>
            <GroceriesProvider>
              <CartProvider>
                <SearchProvider>
                  <FormProvider>
                    <ProductOnboardProvider>
                      <CategoriesProvider>
                        <SpoonacularProvider>
                          {children}
                        </SpoonacularProvider>
                      </CategoriesProvider>
                    </ProductOnboardProvider>
                  </FormProvider>
                </SearchProvider>
              </CartProvider>
            </GroceriesProvider>
          </RecommendedProvider>
        </NotificationProvider>
      </FoodFactsProvider>
    </AuthProvider>
  )
}

export default MultiContext;