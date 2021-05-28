import React, { useState, useContext } from "react"

export const FormContext = React.createContext()

export function FormProvider({ children }) {
  const [currentId, setCurrentId] = useState([])

  const value = {
    currentId,
    setCurrentId,
  }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

const useForm= () => {
  const { currentId, setCurrentId } = useContext(FormContext);
  
  return {
    currentId,
    setCurrentId,
  };
};

export default useForm;