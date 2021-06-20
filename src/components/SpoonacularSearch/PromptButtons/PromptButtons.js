import React from "react";
import useStyles from "./styles.js";
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import CreateIcon from '@material-ui/icons/Create';
import { UPC_SEARCH, FORM } from "../../../constants/routeConstants"
import { useHistory } from "react-router-dom"

const SpoonacularSearch = () => {
  const classes = useStyles();
  const history = useHistory()

  const handleOpenUPC = () => {
    history.push(UPC_SEARCH);
  }

  const handleOpenForm = () => {
    history.push(FORM);
  }

  return (
    <div className={classes.promptContainer}>
      <button className={classes.upcSearchBtn} onClick={handleOpenUPC}>
        <HorizontalSplitIcon className={classes.barcodeIcon} />
        Search by UPC </button>

      <button className={classes.createBtn} onClick={handleOpenForm}>
        <CreateIcon className={classes.createIcon} /> Create
      </button>
    </div>
  );
};

export default SpoonacularSearch
