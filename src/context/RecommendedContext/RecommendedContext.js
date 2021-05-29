import React, { useState, useContext, useEffect } from "react"
import * as api from "../../api/index.js"

export const RecommendedContext = React.createContext()

export function RecommendedProvider({ children }) {
  const [allRecommendedItems, setAllRecommendedItems] = useState([])

  async function getAllRecommendedItems() {
    const data = await api.fetchRecommended()

    setAllRecommendedItems(data)
  }

  useEffect(() => {
    getAllRecommendedItems()
  }, [])

  const value = {
    allRecommendedItems,
    getAllRecommendedItems,
  }

  return (
    <RecommendedContext.Provider value={value}>
      {children}
    </RecommendedContext.Provider>
  )
}

const useRecommended= () => {
  const { allRecommendedItems, getAllRecommendedItems } = useContext(RecommendedContext);
  
  return {
    allRecommendedItems,
    getAllRecommendedItems,
  };
};

export default useRecommended;