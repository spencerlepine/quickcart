import React from "react"
import { Link } from "react-router-dom"
import useStyles from "./styles"

const Overview = () => {
  const classes = useStyles()

  return (
    <div className={classes.errorContainer}>
      <p>Page not found</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Overview
