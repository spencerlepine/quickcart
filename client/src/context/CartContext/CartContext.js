import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as cartItemData from 'api/firebase/cart';
// import * as cartLogger from 'api/firebase/logs';

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cartLogs, setCartLogs] = useState(null);

  useEffect(() => {
    setItemCount(Object.values(cartProducts).reduce((itemCount, categoryObj) => (
      itemCount += Object.values(categoryObj).reduce((quantitySum, product) => quantitySum += (product['quantity'] || 0), 0)
    ), 0));
  }, [cartProducts]);

  function getCartLogs(lastLogDate) {
    // cartLogger.fetchAll()
    cartItemData.fetchCartLogs(lastLogDate, recentCartLogs => {
      console.log(recentCartLogs);
      setCartLogs(prevLogs => (prevLogs || []).concat(recentCartLogs));
    });
  }

  function fetchCategoryDocs(categoryID) {
    setLoading(true);
    cartItemData.fetchCategory(categoryID, docList => {
      const categoryObj = {};
      docList.forEach(product => (
        categoryObj[product['_id']] = product
      ));

      setCartProducts(prevCart => ({
        ...prevCart,
        [categoryID]: categoryObj,
      }));
      setLoading(false);
    });
  }

  function addToCart(item, categoryID) {
    setLoading(true);
    cartItemData.saveItem(item, categoryID, savedCartItem => {
      setCartProducts(prevCart => {
        const updatedCategoryObj = {
          ...prevCart[categoryID],
          [item['_id']]: savedCartItem,
        };

        return {
          ...prevCart,
          [categoryID]: updatedCategoryObj,
        };
      });
      setLoading(false);
    });
  }

  function removeFromCart(itemID, categoryID, overrideDelete = false) {
    setLoading(true);
    const existingCartItem = cartProducts[categoryID][itemID];
    if (!existingCartItem) {
      console.log(itemID, 'did not exists in', categoryID);
    }

    if (!overrideDelete && existingCartItem['quantity'] > 1) {
      const updatedQuantity = { ...existingCartItem, quantity: existingCartItem['quantity'] - 1 };
      cartItemData.updateItem(updatedQuantity, categoryID, updatedItem => {
        setCartProducts(prevCart => {
          const updatedCategoryObj = {
            ...prevCart[categoryID],
          };
          updatedCategoryObj[itemID] = updatedItem;

          return {
            ...prevCart,
            [categoryID]: updatedCategoryObj,
          };
        });
        setLoading(false);
      });
    } else {
      cartItemData.removeItem(itemID, categoryID, () => {
        setCartProducts(prevCart => {
          const updatedCategoryObj = {
            ...prevCart[categoryID],
          };
          delete updatedCategoryObj[itemID];

          return {
            ...prevCart,
            [categoryID]: updatedCategoryObj,
          };
        });
        setLoading(false);
      });
    }
  }

  function cartToLogs(item, categoryID) {
    setLoading(true);
    cartItemData.logCartItem(item, categoryID, () => {
      removeFromCart(item['_id'], categoryID, true);

      setCartProducts(prevCart => {
        const updatedCategoryObj = {
          ...prevCart[categoryID],
        };
        delete updatedCategoryObj[item['_id']];

        return {
          ...prevCart,
          [categoryID]: updatedCategoryObj,
        };
      });
      setLoading(false);
    });
  }


  const value = {
    loading,
    fetchCategoryDocs,
    addToCart,
    itemCount,
    removeFromCart,
    cartToLogs,
    cartProducts,
    getCartLogs,
    cartLogs,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

const useCart = () => useContext(CartContext);

export default useCart;

CartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
