import React from "react";
import useStyles from "./styles.js";
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import CreateIcon from '@material-ui/icons/Create';
import { SEARCH, FORM } from "../../../../constants/routeConstants"
import { useHistory } from "react-router-dom"

const SpoonacularSearch = () => {
  const classes = useStyles();
  const history = useHistory()

  const handleOpenSearch = () => {
    history.push(SEARCH);
  }

  const handleOpenForm = () => {
    history.push(FORM);
  }

  return (
    <div className={classes.promptContainer}>
      <button className={classes.upcSearchBtn} onClick={handleOpenSearch}>
        <FormatSizeIcon className={classes.barcodeIcon} />
        Search by Name </button>

      <button className={classes.createBtn} onClick={handleOpenForm} >
        <CreateIcon className={classes.createIcon} /> Create
      </button>
    </div>
  );
};

export default SpoonacularSearch
