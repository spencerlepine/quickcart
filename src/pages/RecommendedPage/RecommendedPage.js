import React, { useEffect } from 'react';
import CategoryCards from '../../components/CategoryCards/CategoryCards.js';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import useRecommended from '../../context/RecommendedContext/RecommendedContext.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles.js';

const RecommendedPage = () => {
  const classes = useStyles();

  const { allRecommendedItems, getAllRecommendedItems, loading } = useRecommended();

  useEffect(() => {
    getAllRecommendedItems();
  })

  const categorySliders = [];
  for (const category in allRecommendedItems) {
    let thisItemArray = allRecommendedItems[category];
    categorySliders.push(<CategoryCards key={category} categoryItems={thisItemArray} />);
  }

  return (
    <div className={classes.gridView}>
      <h3>Cart Recommendations</h3>
      <hr />
      {loading
        ?
        <CircularProgress />
        :
        <React.Fragment>
          {categorySliders}
        </React.Fragment>}
    </div>
  )
}

export default withAuthRedirect(RecommendedPage);
