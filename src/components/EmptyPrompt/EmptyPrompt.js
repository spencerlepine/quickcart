import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';

const EmptyCart = ({ image, message, buttonText, destination, addFilter = false }) => {
  const classes = useStyles();

  let imageClasses = `${classes.emptyImage}`;
  if (addFilter) {
    imageClasses += ` ${classes.imageFilter}`;
  }

  return (
    <div className={classes.emptyContainer}>
      <img className={imageClasses} src={image} alt='empty'></img>
      <p className={classes.emptyMessage}>{message}</p>
      <span className={classes.actionButton}>
        <Link to={destination} className={classes.orderButton}>
          {buttonText}
        </Link>
      </span>
    </div>
  )
}

export default EmptyCart;