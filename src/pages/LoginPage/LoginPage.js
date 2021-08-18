import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const LoginPage = () => {
  return (
    <div className="login-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(LoginPage);
