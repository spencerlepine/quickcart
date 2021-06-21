import React, { useState, useContext } from "react"
import * as foodApi from "../../api/controllers/spoonacular"

export const SpoonacularContext = React.createContext()

export function SpoonacularProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [itemUPCSearch, setItemUPCSearch] = useState("")
  const [searchResultList, setSearchResultList] = useState(null)
  const [itemDetails, setItemDetails] = useState({})

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

  async function getProductDetails(id) {
    setLoading(true)
    // param {string}
    const data = await foodApi.fetchProductDetails(id)
    setItemDetails(data)
    setLoading(false)
  }

  const value = {
    itemUPCSearch,
    searchResultList,
    fetchUPCItemData,
    searchProducts,
    loading,
    getProductDetails,
    itemDetails,
    setItemDetails,
    setSearchResultList,
  }

  return (
    <SpoonacularContext.Provider value={value}>
      {children}
    </SpoonacularContext.Provider>
  )
}

const useSpoonacular = () => {
  const { itemUPCSearch, getProductDetails, itemDetails, setItemDetails, loading, fetchUPCItemData, searchProducts, searchResultList, setSearchResultList } = useContext(SpoonacularContext);

  return {
    itemUPCSearch,
    fetchUPCItemData,
    searchProducts,
    searchResultList,
    getProductDetails,
    loading,
    setSearchResultList,
    itemDetails,
    setItemDetails
  };
};

export default useSpoonacular;