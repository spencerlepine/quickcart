import React, { useState, useContext } from "react"

export const GroceriesContext = React.createContext()

export function GroceriesProvider({ children }) {
  const [allGroceries, setAllGroceries] = useState([])

  const value = {
    allGroceries,
  }

  return (
    <GroceriesContext.Provider value={value}>
      {children}
    </GroceriesContext.Provider>
  )
}

const useGroceries= () => {
  const { allGroceries } = useContext(GroceriesContext);
  
  return {
    allGroceries,
  };
};

export default useGroceries;