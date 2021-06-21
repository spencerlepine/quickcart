import React from "react"
import Button from "@material-ui/core/Button";
import useStyles from "./styles"

const ClearButton = ({ handleClick, editSelection, className }) => {
  const classes = useStyles();

  return (<Button
    className={classes.deleteButton}
    onClick={handleClick}
    color="secondary"
    variant="contained"
  >
    {editSelection ? "Delete" : "Clear"}
  </Button>
  )
}

export default ClearButton