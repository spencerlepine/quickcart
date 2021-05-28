import React, { useState, useContext } from "react"

export const GroceriesContext = React.createContext()

export function GroceriesProvider({ children }) {
  const [allGroceries, setAllGroceries] = useState([])

  function updateGroceryItem() {
    console.log("updateing grocewry item in GroceryContext")
  }

  const value = {
    allGroceries,
    updateGroceryItem,
  }

  return (
    <GroceriesContext.Provider value={value}>
      {children}
    </GroceriesContext.Provider>
  )
}

const useGroceries= () => {
  const { allGroceries, updateGroceryItem } = useContext(GroceriesContext);
  
  return {
    allGroceries,
    updateGroceryItem,
  };
};

export default useGroceries;