import React, { useState, useContext } from "react"

export const FormContext = React.createContext()

export function FormProvider({ children }) {
  const [currentId, setCurrentId] = useState(null)
  const [searchSelection, setSearchSelection] = useState(null)

  const value = {
    currentId,
    setCurrentId,
    setSearchSelection,
    searchSelection,
  }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

const useForm= () => {
  const { currentId, setCurrentId, searchSelection, setSearchSelection } = useContext(FormContext);
  
  return {
    currentId,
    setCurrentId,
    setSearchSelection,
    searchSelection,
  };
};

export default useForm;