import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const CreatePage = () => {
  return (
    <div className="create-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(CreatePage);
