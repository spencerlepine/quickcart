import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const SavedPage = () => {
  const classes = useStyles();

  return (
    <div className="saved-container">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default withAuthRedirect(SavedPage);
