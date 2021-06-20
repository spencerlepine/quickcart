import React, { useState, useContext } from "react"
import * as foodApi from "../../api/controllers/spoonacular"

export const SpoonacularContext = React.createContext()

export function SpoonacularProvider({ children }) {
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

  async function searchProducts(keyword) {
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
    searchProducts,
    loading,
    setSearchResultList,
  }

  return (
    <SpoonacularContext.Provider value={value}>
      {children}
    </SpoonacularContext.Provider>
  )
}

const useSpoonacular = () => {
  const { itemUPCSearch, loading, fetchUPCItemData, searchProducts, searchResultList, setSearchResultList } = useContext(SpoonacularContext);

  return {
    itemUPCSearch,
    fetchUPCItemData,
    searchProducts,
    searchResultList,
    loading,
    setSearchResultList,
  };
};

export default useSpoonacular;