import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const NotificationsContext = React.createContext();

export function NotificationsProvider({ children }) {
  const [currentNotification, setCurrentNotification] = useState('');

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

NotificationsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
