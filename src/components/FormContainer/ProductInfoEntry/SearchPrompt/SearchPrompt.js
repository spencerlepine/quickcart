import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'config/constants/routeConstants';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './styles.js';

const SubmitButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchProductsPrompt}>
      <div className={classes.promptsRedirects}>
        <Link className={classes.promptBtn} to={HOME}>
          <FindInPageIcon fontSize='large' /> <p>Search Products</p>
        </Link>
        <Link className={`${classes.promptBtn} ${classes.scanUPCBtn}`} to={HOME}>
          <PhotoCameraIcon fontSize='large' /> <p>Scan UPC</p>
        </Link>
      </div>
      <div className={classes.separator}>or</div>
      <button className={classes.manualBtn}>
        ENTER MANUALLY
      </button>
    </div>
  );
};

export default SubmitButton;
