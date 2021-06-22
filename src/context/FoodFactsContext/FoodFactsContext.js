import React, { useState, useContext } from "react"
import * as foodApi from "../../api/controllers/foodFacts"
import extractGroceryValue from "../../modules/extractGroceryValue"

export const FoodFactsContext = React.createContext()

export function FoodFactsProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [itemUPCSearch, setItemUPCSearch] = useState("")
  const [searchResultList, setSearchResultList] = useState(null)

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

  async function searchProductsOFF(keyword) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProducts(keyword)
    setSearchResultList(data)
    setLoading(false)
  }

  async function fieldFromId(id, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductById(id)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    // console.log(fieldResult)
    setIdFieldResult(fieldResult)
    setLoading(false)
  }

  async function fieldFromName(name, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductByName(name)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    setNameFieldResult(fieldResult)
    setLoading(false)
  }

  async function fieldFromUPC(upc, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductById(upc)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    // console.log(fieldResult)
    setUpcFieldResult(fieldResult)
    setLoading(false)
  }

  const value = {
    itemUPCSearch,
    searchResultList,
    fetchUPCItemData,
    searchProductsOFF,
    loading,
    setSearchResultList,
    idFieldResult,
    nameFieldResult,
    upcFieldResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC,
  }

  return (
    <FoodFactsContext.Provider value={value}>
      {children}
    </FoodFactsContext.Provider>
  )
}

const useFoodFacts = () => {
  const { itemUPCSearch,
    loading,
    fetchUPCItemData,
    searchProductsOFF,
    searchResultList,
    setSearchResultList,
    idFieldResult,
    nameFieldResult,
    upcFieldResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC, } = useContext(FoodFactsContext);

  return {
    itemUPCSearch,
    fetchUPCItemData,
    searchProductsOFF,
    searchResultList,
    loading,
    setSearchResultList,
    idFieldResult,
    nameFieldResult,
    upcFieldResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC,
  };
};

export default useFoodFacts;