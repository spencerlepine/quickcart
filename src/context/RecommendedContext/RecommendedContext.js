import React, { useState, useContext } from "react"

export const RecommendedContext = React.createContext()

export function RecommendedProvider({ children }) {
  const [allRecommendedItems, setAllRecommendedItems] = useState([])

  const value = {
    allRecommendedItems,
  }

  return (
    <RecommendedContext.Provider value={value}>
      {children}
    </RecommendedContext.Provider>
  )
}

const useRecommended= () => {
  const { allRecommendedItems } = useContext(RecommendedContext);
  
  return {
    allRecommendedItems,
  };
};

export default useRecommended;