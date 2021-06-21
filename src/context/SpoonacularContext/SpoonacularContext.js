import React, { useState, useContext } from "react"
import * as foodApi from "../../api/controllers/spoonacular"
import extractGroceryValue from "../../modules/extractGroceryValue"

export const SpoonacularContext = React.createContext()

export function SpoonacularProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [itemUPCSearch, setItemUPCSearch] = useState("")
  const [searchResultList, setSearchResultList] = useState(null)
  const [itemDetails, setItemDetails] = useState({})

  const [idFieldResult, setIdFieldResult] = useState(null)
  const [nameFieldResult, setNameFieldResult] = useState(null)
  const [upcFieldResult, setUpcFieldResult] = useState(null)

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

  async function fieldFromId(id, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductById(id)
    console.log(data)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    console.log(fieldResult)
    setIdFieldResult(fieldResult)
    setLoading(false)
  }

  async function fieldFromName(name, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductByName(name)
    console.log(data)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    console.log(fieldResult)
    setNameFieldResult(fieldResult)
    setLoading(false)
  }

  async function fieldFromUPC(upc, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductByUpc(upc)
    console.log(data)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    console.log(fieldResult)
    setUpcFieldResult(fieldResult)
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
    idFieldResult,
    nameFieldResult,
    upcFieldResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC,
  }

  return (
    <SpoonacularContext.Provider value={value}>
      {children}
    </SpoonacularContext.Provider>
  )
}

const useSpoonacular = () => {
  const { itemUPCSearch,
    getProductDetails,
    itemDetails,
    setItemDetails,
    loading,
    fetchUPCItemData,
    searchProducts,
    searchResultList,
    setSearchResultList,
    idFieldResult,
    nameFieldResult,
    upcFieldResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC, } = useContext(SpoonacularContext);

  return {
    itemUPCSearch,
    fetchUPCItemData,
    searchProducts,
    searchResultList,
    getProductDetails,
    loading,
    setSearchResultList,
    itemDetails,
    setItemDetails,
    idFieldResult,
    nameFieldResult,
    upcFieldResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC,
  };
};

export default useSpoonacular;