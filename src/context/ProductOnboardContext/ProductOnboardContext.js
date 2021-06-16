import React, { useState, useContext } from "react"
import imageSearch from '../../modules/googleImageSearch'

export const ProductOnboardContext = React.createContext()

export function ProductOnboardProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [imageSearchResult, setImageSearchResult] = useState([])

  const searchCallback = (results) => {
    const images = results.map(obj => {
      return {
        image: obj["image"]["thumbnailLink"],
        name: obj["title"],
      }
    })
    setImageSearchResult(images)
  }

  const keywordSearch = async (keyword, callback) => {
    setLoading(true)
    await imageSearch(keyword, callback, 0, 5)
    setLoading(false)
  }

  const value = {
    loading,
    imageSearchResult,
    setImageSearchResult,
    keywordSearch,
    searchCallback,
  }

  return (
    <ProductOnboardContext.Provider value={value}>
      {children}
    </ProductOnboardContext.Provider>
  )
}

const useProductOnboard = () => {
  const { imageSearchResult, setImageSearchResult, keywordSearch, loading, searchCallback } = useContext(ProductOnboardContext);

  return {
    loading,
    imageSearchResult,
    setImageSearchResult,
    searchCallback,
    keywordSearch,
  }
};

export default useProductOnboard;