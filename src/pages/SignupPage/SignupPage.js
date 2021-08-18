import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(SignupPage);
