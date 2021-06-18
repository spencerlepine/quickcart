import React, { useState, useContext, useEffect } from "react"
import * as api from "../../api/index"

export const RecommendedContext = React.createContext()

export function RecommendedProvider({ children }) {
  const [allRecommendedItems, setAllRecommendedItems] = useState([])
  const [loading, setLoading] = useState(false)

  async function getAllRecommendedItems() {
    setLoading(true)
    const data = await api.fetchRecommended()

    setAllRecommendedItems(data)
    setLoading(false)
  }

  useEffect(() => {
    getAllRecommendedItems()
  }, [])

  const value = {
    loading,
    allRecommendedItems,
    getAllRecommendedItems,
  }

  return (
    <RecommendedContext.Provider value={value}>
      {children}
    </RecommendedContext.Provider>
  )
}

const useRecommended = () => {
  const { allRecommendedItems, loading, getAllRecommendedItems } = useContext(RecommendedContext);

  return {
    allRecommendedItems,
    loading,
    getAllRecommendedItems,
  };
};

export default useRecommended;