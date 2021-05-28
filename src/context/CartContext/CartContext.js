import React, { useState, useContext } from "react"

export const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [allCartItems, setAllCartItems] = useState([])

  function addItemToCart(groceryItem) {
    console.log("Adding item to cart in /CartContext.js")
  }

  const value = {
    allCartItems,
    addItemToCart,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

const useCart= () => {
  const { allCartItems, addItemToCart } = useContext(CartContext);
  
  return {
    allCartItems,
    addItemToCart,
  };
};

export default useCart;