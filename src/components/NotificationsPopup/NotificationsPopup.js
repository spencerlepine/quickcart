import React, { useEffect } from "react";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import useNotification from "../../context/NotificationContext/NotificationContext"
import { store } from 'react-notifications-component';
import useStyles from "./styles"

function NofiticationPopup() {
  const { currentNotification } = useNotification()
  const classes = useStyles()
  
  useEffect(() => {
    if (typeof currentNotification === "object") {
      const { title, message, type } = currentNotification  
      store.addNotification({
        title: title,
        message: message.slice(0, 35),
        type: type || "warning",
        insert: "top-right",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  }, [currentNotification]);

  return (
    <ReactNotification isMobile breakpoint className={classes.popupStyles} />
  )
}

export default NofiticationPopup;