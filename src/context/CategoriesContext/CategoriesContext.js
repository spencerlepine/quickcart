import React, { useState, useContext, useEffect } from "react"
import * as api from "../../api/controllers/categories"

export const CategoriesContext = React.createContext()

export function CategoriesProvider({ children }) {
  const [allCategories, setAllCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => getAllCategories(), [])

  async function getAllCategories() {
    setLoading(true)
    try {
      const data = await api.getGroceryCategories()
      setAllCategories(prevList => data)
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false)
  }

  async function createNewCategory(newCategoryName) {
    try {
      await api.addCategory(newCategoryName)

      setAllCategories(prevList => [...prevList, newCategoryName])
    } catch (error) {
      console.log(error.message)
    }
  }

  const value = {
    loading,
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

const useCategories = () => {
  const { allCategories, loading, getAllCategories, createNewCategory } = useContext(CategoriesContext);

  return {
    allCategories,
    loading,
    getAllCategories,
    createNewCategory,
  };
};

export default useCategories;