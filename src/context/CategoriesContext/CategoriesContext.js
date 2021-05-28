import React, { useState, useContext } from "react"

export const CategoriesContext = React.createContext()

export function CategoriesProvider({ children }) {
  const [allCategories, setAllCategories] = useState([])

  function getAllCategories() {
    console.log("Fetch All Categories in /CategoryContext.js")
  }

  function createNewCategory() {
    console.log("creating a new category in /CategoryContext")
  }

  const value = {
    allCategories,
    getAllCategories,
    createNewCategory,
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

const useCategories= () => {
  const { allCategories, getAllCategories, createNewCategory } = useContext(CategoriesContext);
  
  return {
    allCategories,
    getAllCategories,
    createNewCategory,
  };
};

export default useCategories;