import React from "react";
import useStyles from "./styles.js";

function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={`${classes.container}`}>
      {children}
    </div>
  );
}

export default Layout;
