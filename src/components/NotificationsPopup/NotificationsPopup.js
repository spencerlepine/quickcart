import React, { useEffect } from "react";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import useNotification from "../../context/NotificationContext/NotificationContext"
import { store } from 'react-notifications-component';
import useStyles from "./styles"

function NofiticationPopup() {
   const { currentMessage } = useNotification()
  const classes = useStyles()
  
  useEffect(() => {
    if (typeof currentMessage === "object") {
      const { title, message, type } = currentMessage  
      store.addNotification({
        title: title,
        message: message.slice(0, 35),
        type: type,
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
  }, [currentMessage]);

  return (
    <ReactNotification isMobile breakpoint className={classes.popupStyles} />
  )
}

export default NofiticationPopup;