import React, { useState, useContext, useEffect } from "react"
import * as api from "../../api/index"

export const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [allCartItems, setAllCartItems] = useState([])
  const [allCartLogs, setAllCartLogs] = useState([])

  async function addItemToCart(groceryItem) {
    const data = await api.addToCart(groceryItem)

    // Is this already in the cart?
    if (allCartItems.any(item => item["_id"] === groceryItem["_id"])) {
      // Update the existing list
      setAllCartItems(prevList => {
        return prevList.map(item => item["_id"] === groceryItem["_id"] ? groceryItem : item)
      })
    } else {
      // Just append it to the list
      setAllCartItems(prevList => [...prevList, data])
    }
  }

  async function getAllCartItems() {
    const data = await api.fetchCartItems()
    setAllCartItems(data || [])
  }

  async function updateCartItem(updatedCartItem) {
    try {
      const newCartItem = await api.updateCartItem(updatedCartItem)
      const newItemId = newCartItem["_id"]

      // go through and replace the old grocery
      setAllCartItems(prevList => {
        return prevList.map(item => item["_id"] === newItemId ? newCartItem : item)
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteCartItem(groceryId) {
    try {
      await api.removeFromCart(groceryId)

      // go through and replace the old grocery
      setAllCartItems(prevList =>
        prevList.filter(item => item["_id"] !== groceryId)
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

  async function getAllCartLogs() {
    try {
      const result = await api.fetchCartLogs()
      setAllCartLogs(result)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllCartItems()
  }, [])

  const value = {
    allCartItems,
    allCartLogs,
    addItemToCart,
    getAllCartItems,
    updateCartItem,
    deleteCartItem,
    logCartItem,
    getAllCartLogs,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const { allCartItems, getAllCartLogs, allCartLogs, addItemToCart, getAllCartItems, updateCartItem, deleteCartItem, logCartItem } = useContext(CartContext);

  return {
    allCartItems,
    allCartLogs,
    addItemToCart,
    getAllCartItems,
    updateCartItem,
    deleteCartItem,
    logCartItem,
    getAllCartLogs,
  };
};

export default useCart;