import React, { useState, useContext } from "react"

export const RecommendedContext = React.createContext()

export function RecommendedProvider({ children }) {
  const [allRecommended, setAllRecommended] = useState([])

  const value = {
    allRecommended,
  }

  return (
    <RecommendedContext.Provider value={value}>
      {children}
    </RecommendedContext.Provider>
  )
}

const useRecommended= () => {
  const { allRecommended } = useContext(RecommendedContext);
  
  return {
    allRecommended,
  };
};

export default useRecommended;