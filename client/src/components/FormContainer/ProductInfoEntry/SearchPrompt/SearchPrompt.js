import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HOME, UPC_SCAN } from 'config/constants/routeConstants';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './styles.js';

const SearchPrompt = ({ closePopup }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchProductsPrompt}>
      <div className={classes.promptsRedirects}>
        <Link className={classes.promptBtn} to={HOME}>
          <FindInPageIcon fontSize='large' /> <p>Search Products</p>
        </Link>
        <Link className={`${classes.promptBtn} ${classes.scanUPCBtn}`} to={UPC_SCAN}>
          <PhotoCameraIcon fontSize='large' /> <p>Scan UPC</p>
        </Link>
      </div>
      <div className={classes.separator}>or</div>
      <button className={classes.manualBtn} onClick={closePopup}>
        ENTER MANUALLY
      </button>
    </div>
  );
};

export default SearchPrompt;

SearchPrompt.propTypes = {
  closePopup: PropTypes.func.isRequired,
};