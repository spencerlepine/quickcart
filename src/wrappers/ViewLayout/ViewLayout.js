import React from "react";
import { NotificationsProvider } from "context/NotificationsContext/NotificationsContext";
import { AuthProvider } from "context/AuthContext/AuthContext";
import NotificationsPopup from "components/ui/NotificationsPopup/NotificationsPopup";
import Footer from "components/ui/Footer/Footer";
import Navbar from "components/ui/Navbar/Navbar";
import useStyles from "./styles.js";

const ViewLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NotificationsPopup />
      <AuthProvider>
        <NotificationsProvider>
          <Navbar />
          <div className={`${classes.container}`}>{children}</div>
          <Footer />
        </NotificationsProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

export default ViewLayout;
