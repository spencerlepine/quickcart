import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const CreatePage = () => {
  const classes = useStyles();

  return (
    <div className="create-container">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default withAuthRedirect(CreatePage);
