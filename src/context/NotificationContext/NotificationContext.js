import React, { useState, useContext } from "react"

export const NotificationContext = React.createContext()

export function NotificationProvider({ children }) {
  const [currentMessage, setCurrentMessage] = useState("")

  const value = {
    currentMessage,
    setCurrentMessage,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

const useNotification= () => {
  const { currentMessage, setCurrentMessage } = useContext(NotificationContext);
  
  return {
    currentMessage,
    setCurrentMessage
  };
};

export default useNotification;