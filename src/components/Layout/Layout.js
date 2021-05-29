import React from "react";
import useStyles from "./styles.js";

function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={`container ${classes.container}`}>
        {children}
    </div>
  );
}

export default Layout;
