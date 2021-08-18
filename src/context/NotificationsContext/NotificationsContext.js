import React, { useState, useContext } from "react";

export const NotificationsProvider = React.createContext();

export function NotificationsContext({ children }) {
  const [currentNotification, setCurrentNotification] = useState("");

  const value = {
    currentNotification,
    setCurrentNotification,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

const useNotifications = () => {
  const { currentNotification, setCurrentNotification } =
    useContext(NotificationsContext);

  return {
    currentNotification,
    setCurrentNotification,
  };
};

export default useNotifications;
