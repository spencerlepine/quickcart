import React, { useState, useContext } from "react"
import * as foodApi from "../../api/controllers/foodFacts"

export const FoodFactsContext = React.createContext()

export function FoodFactsProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [itemUPCSearch, setItemUPCSearch] = useState("")
  const [searchResultList, setSearchResultList] = useState(null)

  async function fetchUPCItemData(UPC) {
    setLoading(true)
    // param {string}
    const data = await foodApi.fetchUPCItem(UPC)
    setItemUPCSearch(data)
    setLoading(false)
  }

  async function searchProductsOFF(keyword) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProducts(keyword)
    setSearchResultList(data)
    setLoading(false)
  }

  const value = {
    itemUPCSearch,
    searchResultList,
    fetchUPCItemData,
    searchProductsOFF,
    loading,
    setSearchResultList,
  }

  return (
    <FoodFactsContext.Provider value={value}>
      {children}
    </FoodFactsContext.Provider>
  )
}

const useFoodFacts = () => {
  const { itemUPCSearch, loading, fetchUPCItemData, searchProductsOFF, searchResultList, setSearchResultList } = useContext(FoodFactsContext);

  return {
    itemUPCSearch,
    fetchUPCItemData,
    searchProductsOFF,
    searchResultList,
    loading,
    setSearchResultList,
  };
};

export default useFoodFacts;