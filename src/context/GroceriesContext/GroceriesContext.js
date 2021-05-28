import React, { useState, useContext } from "react"

export const GroceriesContext = React.createContext()

export function GroceriesProvider({ children }) {
  const [allGroceryItems, setAllGroceryItems] = useState([])

  function updateGroceryItem() {
    console.log("updateing grocewry item in GroceryContext")
  }

  function createGroceryItem() {
    console.log("creating grocewry item in GroceryContext")
  }

  function deleteGroceryItem() {
    console.log("deleting grocewry item in GroceryContext")
  }

  const value = {
    allGroceryItems,
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
  const { allGroceryItems, updateGroceryItem, createGroceryItem, deleteGroceryItem } = useContext(GroceriesContext);
  
  return {
    allGroceryItems,
    createGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
  };
};

export default useGroceries;