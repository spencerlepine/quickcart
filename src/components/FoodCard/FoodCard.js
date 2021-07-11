import React from 'react';
import useCart from '../../context/CartContext/CartContext';
import useSearch from '../../context/SearchContext/SearchContext';
import useNotification from '../../context/NotificationContext/NotificationContext.js';
import searchMatches from './searchMatches';
import DetailsPopup from '../DetailsPopup/DetailsPopup';
import FoodDetails from '../FoodDetails/FoodDetails';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';

const FoodCard = ({ groceryItem, hideCard }) => {
  const { currentSearch, categorySelection } = useSearch();
  const { setCurrentNotification } = useNotification();
  const { addItemToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    addItemToCart(groceryItem);
    const cartMessage = {
      name: groceryItem.name || 'item',
      message: `Added to cart`,
      type: 'success'
    };
    setCurrentNotification(cartMessage);
  }

  if (hideCard || !searchMatches(currentSearch, groceryItem) || (categorySelection && categorySelection !== groceryItem.category)) {
    return null;
  }

  return (
    <DetailsPopup
      CardComponent={<ProductThumbnail handleAdd={handleAdd} groceryItem={groceryItem} />}
      DetailsComponent={<FoodDetails handleAdd={handleAdd} groceryItem={groceryItem} />}
    />
  )
}

export default FoodCard;
