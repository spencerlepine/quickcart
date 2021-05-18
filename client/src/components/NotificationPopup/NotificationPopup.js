import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import useStyles from "./styles"

function NofiticationPopup() {
  const currentError = useSelector((state) => state.error);
  const classes = useStyles()
  
  useEffect(() => {
    if (typeof currentError === "object") {
      const { message, name } = currentError  
      store.addNotification({
        title: name,
        message: message.slice(0, 35),
        type: "danger",
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
  }, [currentError]);

  return (
    <ReactNotification isMobile breakpoint className={classes.popupStyles} />
  )
}

export default NofiticationPopup;
