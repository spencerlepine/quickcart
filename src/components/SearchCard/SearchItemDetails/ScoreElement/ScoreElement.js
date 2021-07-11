import React from 'react';
import useStyles from './styles';

const getGradeColor = (nutriScore) => {
  const score = nutriScore.toUpperCase();
  if (score === 'A') {
    return '#2d7e43';
  } else if (score === 'B') {
    return '#96b937';
  } else if (score === 'C') {
    return '#f0ca0d';
  } else if (score === 'D') {
    return '#d57b1a';
  } else if (score === 'E') {
    return '#c53419';
  } else {
    return '#2d7e43';
  }
}

const FoodDetails = ({ nutriScore }) => {
  const classes = useStyles();

  const gradeStyles = {
    backgroundColor: getGradeColor(nutriScore)
  };

  return (
    <span className={classes.itemGrade} style={gradeStyles}>{nutriScore}</span>
  )
}

export default FoodDetails;