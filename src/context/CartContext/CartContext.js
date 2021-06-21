import React, { useState, useContext, useEffect } from "react"
import * as api from "../../api/controllers/cart"

export const CartContext = React.createContext()

export function CartProvider({ children }) {
  const [allCartItems, setAllCartItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [allCartLogs, setAllCartLogs] = useState([])

  async function addItemToCart(groceryItem) {
    const data = await api.addToCart(groceryItem)

    // Is this already in the cart?
    if (allCartItems.some(item => item["_id"] === groceryItem["_id"])) {
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
    setLoading(true)
    const data = await api.fetchCartItems()
    setAllCartItems(data || [])
    setLoading(false)
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
    setLoading(true)
    try {
      const result = await api.fetchCartLogs()
      setAllCartLogs(result)
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    getAllCartItems()
  }, [])

  const value = {
    setAllCartItems,
    allCartItems,
    allCartLogs,
    loading,
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
  const { allCartItems, loading, setAllCartItems, getAllCartLogs, allCartLogs, addItemToCart, getAllCartItems, updateCartItem, deleteCartItem, logCartItem } = useContext(CartContext);

  return {
    loading,
    setAllCartItems,
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