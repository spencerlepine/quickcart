import React, { useState, useContext } from "react"

export const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [allCartItems, setAllCartItems] = useState([])

  function addItemToCart(groceryItem) {
    console.log("Adding item to cart in /CartContext.js")
  }

  function getAllCartItems() {
    console.log("getting all cart items in /CartContext.js")
  }

  const value = {
    allCartItems,
    addItemToCart,
    getAllCartItems,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

const useCart= () => {
  const { allCartItems, addItemToCart, getAllCartItems } = useContext(CartContext);
  
  return {
    allCartItems,
    addItemToCart,
    getAllCartItems,
  };
};

export default useCart;