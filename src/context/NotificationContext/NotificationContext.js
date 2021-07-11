import React, { useState, useContext } from 'react';

export const NotificationContext = React.createContext();

export function NotificationProvider({ children }) {
  const [currentNotification, setCurrentNotification] = useState('');

  const value = {
    currentNotification,
    setCurrentNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

const useNotification = () => {
  const { currentNotification, setCurrentNotification } = useContext(NotificationContext);

  return {
    currentNotification,
    setCurrentNotification
  };
};

export default useNotification;