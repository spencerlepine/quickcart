import React from 'react';
import useGroceries from '../../context/GroceriesContext/GroceriesContext';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import CategoryLabels from '../../components/CategoryLabels/CategoryLabels';
import SearchBar from '../../components/SearchBar/SearchBar';

const BrowseGroceriesPage = () => {
  const { loading } = useGroceries();

  return (
    <React.Fragment>
      <SearchBar />
      <CategoryLabels />
      <FoodGrid loading={loading} />
    </React.Fragment>
  )
}

export default withAuthRedirect(BrowseGroceriesPage);
