import React, { useState, useContext } from "react"

export const CategoriesContext = React.createContext()

export function CategoriesProvider({ children }) {
  const [allCategories, setAllCategories] = useState([])

  function getAllCategories() {
    console.log("Fetch All Categories in /CategoryContext.js")
  }

  const value = {
    allCategories,
    getAllCategories,
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

const useCategories= () => {
  const { allCategories, getAllCategories } = useContext(CategoriesContext);
  
  return {
    allCategories,
    getAllCategories,
  };
};

export default useCategories;