import React, { useState, useEffect, useContext } from "react"
import * as api from "../../api/index"

export const GroceriesContext = React.createContext()

export function GroceriesProvider({ children }) {
  const [allGroceryItems, setAllGroceryItems] = useState([])
  const [totalGroceryCount, setTotalGroceryCount] = useState(-1)
  const [loading, setLoading] = useState()
  console.log(totalGroceryCount)
  useEffect(() => {
    if (totalGroceryCount < 0) {
      fetchTotalGroceryCount()
    }
  }, [])

  useEffect(() => {
    if (totalGroceryCount > 0 && allGroceryItems.length < totalGroceryCount) {
      const lastItem = allGroceryItems.slice(-1)
      const lastId = lastItem.length ? lastItem[0]["name"] : ""
      getAllGroceries(lastId)
    }
  }, [totalGroceryCount, allGroceryItems])

  async function fetchTotalGroceryCount() {
    const count = await api.fetchGroceryCount()
    setTotalGroceryCount(count)
  }

  async function getAllGroceries(lastGroceryId="") {
    setLoading(true)
    try {
      const data = await api.fetchGroceries(lastGroceryId)
      setAllGroceryItems(prevList => [...prevList, ...data])
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  async function updateGroceryItem(updatedGroceryItem) {
    try {
      const newGrocery = await api.updateGrocery(updatedGroceryItem)
      const newGroceryId = newGrocery["name"]

      // go through and replace the old grocery
      setAllGroceryItems(prevList => {
        return prevList.map(item => item["name"] === newGroceryId ? newGrocery : item)
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createGroceryItem(newGroceryItem) {
    try {
      const newGrocery = await api.createGrocery(newGroceryItem)

      // Add only new groceries
      setAllGroceryItems(prevList => {
        const itemExists = prevList.indexOf(newGrocery)
        if (itemExists >= 0) {
          return prevList.filter(item => item["name"] === newGrocery["name"] ? newGrocery : item)
        } else {
          return [...prevList, newGrocery]
        }
      })

      // Save the total count
      await setTotalGroceryCount(prevCount => prevCount + 1)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteGroceryItem(groceryId) {
    try {
      await api.deleteGrocery(groceryId)

      // go through and replace the old grocery
      setAllGroceryItems(prevList => {
        return prevList.filter(item => item["name"] !== groceryId)
      })

      await setTotalGroceryCount(prevCount => prevCount - 1)
    } catch (error) {
      console.log(error.message)
    }
  }

  const value = {
    loading,
    allGroceryItems,
    totalGroceryCount,
    createGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
  }

  return (
    <GroceriesContext.Provider value={value}>
      {children}
    </GroceriesContext.Provider>
  )
}

const useGroceries= () => {
  const { loading, totalGroceryCount, allGroceryItems, updateGroceryItem, createGroceryItem, deleteGroceryItem } = useContext(GroceriesContext);
  
  return {
    loading,
    totalGroceryCount,
    allGroceryItems,
    createGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
  };
};

export default useGroceries;