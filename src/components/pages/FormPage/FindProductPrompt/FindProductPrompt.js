import React from 'react';
import { useHistory } from "react-router-dom";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import useStyles from "./styles.js";
import { SEARCH } from "../../../../constants/routeConstants"

const FindProductPrompt = ({ showPopup, setShowPopup }) => {
  const classes = useStyles()
  const history = useHistory();

  const handleSearch = () => {
    // open the search page
    setShowPopup(false)
    history.push(SEARCH);
  }

  const handleClose = () => {
    setShowPopup(false)
  }

  if (showPopup) {
    return (<div className={classes.searchPrompt}>
      <div className={classes.searchMessage}>
        <button className={classes.searchBtn} onClick={handleSearch}>
          <FindInPageIcon fontSize="large" /> <p>Search Products</p>
        </button>
        <div className={classes.separator}>or</div>
        <button className={classes.manualBtn} onClick={handleClose}>
          ENTER MANUALLY
        </button>
      </div>
    </div>)
  } else {
    return null
  }
};

export default FindProductPrompt