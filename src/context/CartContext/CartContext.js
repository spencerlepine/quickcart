import React, { useState, useContext, useEffect } from "react"
import * as api from "../../api/index"

export const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [allCartItems, setAllCartItems] = useState([])

  async function addItemToCart(groceryItem) {
    const data = await api.addToCart(groceryItem)
    setAllCartItems(prevList => [...prevList, data])
  }

  async function getAllCartItems() {
    const data = await api.fetchCartItems()
    setAllCartItems(data)
  }

  async function updateCartItem(updatedCartItem) {
    try {
      const newCartItem = await api.updateCartItem(updatedCartItem)
      const newItemId = newCartItem["name"]

      // go through and replace the old grocery
      setAllCartItems(prevList => {
        return prevList.map(item => item["name"] === newItemId ? newCartItem : item)
      })
    } catch (error) {
      console.log(error.message)
    }
  } 

  async function deleteCartItem(groceryName) {
    try {
      await api.removeFromCart(groceryName)

      // go through and replace the old grocery
      setAllCartItems(prevList =>
        prevList.filter(item => item["name"] !== groceryName)
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  async function logCartItem(itemToLog) {
    try {
      await api.logCartItem(itemToLog)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllCartItems()
  }, [])

  const value = {
    allCartItems,
    addItemToCart,
    getAllCartItems,
    updateCartItem,
    deleteCartItem,
    logCartItem,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

const useCart= () => {
  const { allCartItems, addItemToCart, getAllCartItems, updateCartItem, deleteCartItem, logCartItem } = useContext(CartContext);
  
  return {
    allCartItems,
    addItemToCart,
    getAllCartItems,
    updateCartItem,
    deleteCartItem,
    logCartItem,
  };
};

export default useCart;