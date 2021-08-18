import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(SettingsPage);
