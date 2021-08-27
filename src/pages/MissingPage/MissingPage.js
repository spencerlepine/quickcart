import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const MissingPage = () => {
  const classes = useStyles();

  return (
    <div className={`missing-container ${classes.missingContainer}`}>
      <p>{'Zoinkers! This page doesn\'t exist :('}</p>
      < Link to={HOME}>
        Homepage
      </Link>
    </div>
  );
};

export default MissingPage;
