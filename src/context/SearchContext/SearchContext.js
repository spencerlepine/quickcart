import React, { useState, useContext, useEffect } from "react"
import { useLocation } from "react-router-dom";

export const SearchContext = React.createContext()

export function SearchProvider({ children }) {
  const [currentSearch, setCurrentSearch] = useState("")
  const [categorySelection, setCategorySelection] = useState("")
  const { pathname } = useLocation()

  const value = {
    categorySelection,
    currentSearch,
    setCurrentSearch,
    setCategorySelection,
  }

  // Track page changes
  useEffect(() => {
    setCurrentSearch("")
    setCategorySelection("")
}, [pathname])

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch= () => {
  const { categorySelection, currentSearch, setCurrentSearch, setCategorySelection } = useContext(SearchContext);
  
  return {
    categorySelection,
    currentSearch,
    setCurrentSearch,
    setCategorySelection,
  };
};

export default useSearch;