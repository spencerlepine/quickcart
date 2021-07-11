// popup component (info icon, missing name field!)
// search products?
// search upc, name, and id in both dumps
// get list of values
// prompt user to USE the value
// Set purchase price:
// 3.40 SELECT
// 2.40 SELECT

// pass in handleChange, fieldName, upc, id, name
// get foodfactscontext, get spoonacular context

import React, { useState } from 'react';
import useStyles from './styles.js';
import toTitleCase from '../../../modules/toTitleCase';
import ErrorIcon from '@material-ui/icons/Error';

const ValueFiller = ({ handleChange, fieldName, UPC, ID, name }) => {
  const classes = useStyles();
  const [displayPopup, setDisplayPopup] = useState(false);

  const handleClick = () => {
    setDisplayPopup(prevBool => !prevBool);
  }

  if (!displayPopup) {
    return (
      <div className={classes.valuePrompt} onClick={handleClick}>
        <ErrorIcon className={classes.errorIcon} /><p>{toTitleCase(fieldName)}</p>
        <button className={classes.findBtn}>FIND</button>
      </div>
    );
  } else { return null; }
}

export default ValueFiller;