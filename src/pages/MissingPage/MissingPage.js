import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const MissingPage = () => {
  return (
    <div className="missing-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(MissingPage);
