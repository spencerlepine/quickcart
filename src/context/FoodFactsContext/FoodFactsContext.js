import React, { useState, useContext } from "react"
import * as foodApi from "../../api/controllers/foodFacts"
import extractGroceryValue from "../../modules/extractGroceryValue"

export const FoodFactsContext = React.createContext()

export function FoodFactsProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [itemUPCSearch, setItemUPCSearch] = useState("")
  const [searchResultList, setSearchResultList] = useState(null)

  const [idFeildResult, setIdFeildResult] = useState(null)
  const [nameFeildResult, setNameFeildResult] = useState(null)
  const [upcFeildResult, setUpcFeildResult] = useState(null)

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
    const data = await foodApi.searchProductsById(id)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    console.log(fieldResult)
    setIdFeildResult(fieldResult)
    setLoading(false)
  }

  async function fieldFromName(name, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductsByName(name)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    console.log(fieldResult)
    setIdFeildResult(fieldResult)
    setLoading(false)
  }

  async function fieldFromUPC(upc, fieldName) {
    setLoading(true)
    // param {string}
    const data = await foodApi.searchProductsByUpc(upc)
    // pull the desired field from it
    const fieldResult = extractGroceryValue(data, fieldName)
    console.log(fieldResult)
    setIdFeildResult(fieldResult)
    setLoading(false)
  }

  const value = {
    itemUPCSearch,
    searchResultList,
    fetchUPCItemData,
    searchProductsOFF,
    loading,
    setSearchResultList,
    idFeildResult,
    nameFeildResult,
    upcFeildResult,
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
    idFeildResult,
    nameFeildResult,
    upcFeildResult,
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
    idFeildResult,
    nameFeildResult,
    upcFeildResult,
    fieldFromId,
    fieldFromName,
    fieldFromUPC,
  };
};

export default useFoodFacts;