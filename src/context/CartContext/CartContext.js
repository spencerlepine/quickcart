import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as cartItemData from 'api/firebase/cart';

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(false);

  function fetchCategoryDocs(categoryID) {
    setLoading(true);
    cartItemData.fetchCategory(categoryID, docList => {
      const categoryObj = {};
      docList.forEach(product => (
        categoryObj[product['_id']] = product
      ));

      setItemCount(() => (
        Object.values(categoryObj).reduce((arr, categoryObj) => arr.concat(Object.values(categoryObj)), []).length
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

  function removeFromCart(itemID, categoryID) {
    setLoading(true);
    const existingCartItem = cartProducts[categoryID][itemID];
    if (!existingCartItem) {
      console.log(itemID, 'did not exists in', categoryID);
    }

    if (existingCartItem['quantity'] > 1) {
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

  const value = {
    loading,
    fetchCategoryDocs,
    addToCart,
    itemCount,
    removeFromCart,
    cartProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

const useCart = () => {
  const {
    loading,
    itemCount,
    fetchCategoryDocs,
    addToCart,
    removeFromCart,
    cartProducts,
  } = useContext(CartContext);

  return {
    cartProducts,
    itemCount,
    fetchCategoryDocs,
    addToCart,
    removeFromCart,
    loading,
  };
};

export default useCart;

CartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
