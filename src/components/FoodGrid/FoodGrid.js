import React, { useEffect } from 'react';
import FoodCard from '../../../FoodCard/FoodCard';
import EmptyPrompt from '../EmptyPrompt/EmptyPrompt';
import missingImage from '../../../images/empty.jpg';
import CardGrid from '../CardGrid/CardGrid';
import { FORM } from '../../../constants/routeConstants';
import useStyles from './styles';

import useGroceries from '../../../context/GroceriesContext/GroceriesContext.js';
import useForm from '../../../context/FormContext/FormContext.js';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

const FoodGrid = ({ loading }) => {
  const classes = useStyles();

  const { allGroceryItems, totalGroceryCount, displayStarters, setDisplayStarters } = useGroceries();
  const { setEditSelection, setSearchSelection } = useForm();

  const foodCards = allGroceryItems.map((item, i) => <FoodCard key={i} groceryItem={item} />);
  const fetchProgress = Math.ceil((allGroceryItems.length / totalGroceryCount) * 100);
  const progressStyle = { width: `${fetchProgress}%` };

  useEffect(() => {
    setEditSelection(null);
    setSearchSelection(null);
  });

  return (
    <>
      {foodCards.length > 0
        ?
        <>
          {(!displayStarters && fetchProgress < 100) && <div className={classes.progressBar} style={progressStyle}></div>}
          <CardGrid cardItems={foodCards} loading={loading} />
          <LoadMoreBtn
            setDisplayStarters={setDisplayStarters}
            displayStarters={displayStarters}
            loading={loading}>
          </LoadMoreBtn>
        </>
        :
        <div className={classes.overviewContainer}>
          <EmptyPrompt
            image={missingImage}
            message='No groceries saved'
            destination={FORM}
            buttonText='New Item'
          />
        </div>
      }
    </>
  );
}

export default FoodGrid;
