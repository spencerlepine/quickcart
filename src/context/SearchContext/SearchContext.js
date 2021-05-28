import React, { useState, useContext } from "react"

export const SearchContext = React.createContext()

export function SearchProvider({ children }) {
  const [currentSearch, setCurrentSearch] = useState("")
  const [categorySelection, setCategorySelection] = useState("")

  const value = {
    categorySelection,
    currentSearch,
    setCurrentSearch,
    setCategorySelection,
  }

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