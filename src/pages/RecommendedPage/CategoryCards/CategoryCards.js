import React from 'react';
import FoodCard from '../../../FoodCard/FoodCard';
import useStyles from './styles.js';

const CategoryCards = ({ categoryItems }) => {
  const classes = useStyles();
  const cardList = categoryItems.map(item => <FoodCard groceryItem={item} />);

  return (
    <div className={classes.gridView}>
      {cardList}
    </div>
  )
}

export default CategoryCards;
