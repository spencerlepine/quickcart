import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import useRecommended from '../../context/RecommendedContext/RecommendedContext.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles.js';

const RecommendedWidget = () => {
  const classes = useStyles();

  const { allRecommendedItems, loading } = useRecommended();

  const recommendedCards = []
  for (const category in allRecommendedItems) {
    let [firstCategoryElem] = allRecommendedItems[category];
    if (firstCategoryElem) {
      recommendedCards.push(<FoodCard groceryItem={firstCategoryElem} key={category} />);
    }
  }

  return (
    <div className={classes.widgetView}>
      {recommendedCards.length > 0 && (
        <React.Fragment>
          <h3>Recommended</h3>
          <hr />
          {loading
            ?
            <CircularProgress />
            :
            <div className={classes.itemsGrid}>{recommendedCards}</div>
          }
        </React.Fragment>
      )}
    </div>
  )
}

export default RecommendedWidget;