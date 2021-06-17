import React, { useState, useContext } from "react"

export const FormContext = React.createContext()

export function FormProvider({ children }) {
  const [editSelection, setEditSelection] = useState(null)
  const [searchSelection, setSearchSelection] = useState(null)

  const value = {
    editSelection,
    setEditSelection,
    setSearchSelection,
    searchSelection,
  }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

const useForm = () => {
  const { editSelection, setEditSelection, searchSelection, setSearchSelection } = useContext(FormContext);

  return {
    editSelection,
    setEditSelection,
    setSearchSelection,
    searchSelection,
  };
};

export default useForm;