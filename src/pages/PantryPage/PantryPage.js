import React from 'react';
import PantryItem from './PantryItem/PantryItem';
import EmptyPrompt from '../../components/EmptyPrompt/EmptyPrompt';
import groceryBag from '../../images/groceries.png';
import CardGrid from '../../components/CardGrid/CardGrid';
import useGroceries from '../../context/GroceriesContext/GroceriesContext';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const PantryPage = () => {
  const classes = useStyles();
  const { allGroceryItems, loading } = useGroceries();

  const pantryItems = allGroceryItems.length > 0 ? allGroceryItems.map((grocery, i) => <PantryItem groceryItem={grocery} key={i} />) : [];

  return (
    <div className={classes.overviewContainer}>
      {loading
        ?
        <CircularProgress />
        :
        <React.Fragment>
          {pantryItems.length > 0
            ?
            <React.Fragment>
              <h3>Recent Purchases</h3>
              <hr />
              <CardGrid cardItems={pantryItems} />
            </React.Fragment>
            :
            <EmptyPrompt
              image={groceryBag}
              message='No recent purchases'
              destination='/'
              buttonText='Browse Items'
            />
          }
        </React.Fragment>}
    </div>
  )
}

export default withAuthRedirect(PantryPage);
