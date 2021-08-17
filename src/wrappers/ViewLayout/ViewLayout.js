import React from "react";
import { NotificationProvider } from "../../context/NotificationContext/NotificationContext";
import { AuthProvider } from "../../context/AuthContext/AuthContext";
import useStyles from "./styles.js";

const ViewLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <AuthProvider>
      <NotificationProvider>
        <div className={`${classes.container}`}>{children}</div>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default ViewLayout;
