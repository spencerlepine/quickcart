import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useCart from 'context/CartContext/CartContext';
import useProducts from 'context/ProductsContext/ProductsContext';
import useStyles from './styles.js';

const SuggesterCard = props => {
  const classes = useStyles();
  const {
    _id,
    quantity,
    image,
    name,
    category,
    serving_size,
    purchase_price,
  } = props;
  const { addToCart, hiddenProductIds, hideProductsById } = useCart();
  const { fetchCategoryDocs } = useProducts();
  const [display, setDisplay] = useState(true);

  const handleReplace = () => {
    setDisplay(false);
    fetchCategoryDocs(category, true);
    hideProductsById(_id);
    // find more products like this one?
    // findSimilarProduct(props);
  };

  const itemPrice = (
    parseFloat(purchase_price) *
    quantity
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  if (!display || hiddenProductIds.indexOf(_id)) {
    return null;
  }

  return (
    <div className={`cart-card ${classes.cartCard}`}>
      <div className={classes.clickableElem}>
        <div className={classes.imageContainer}>
          <img className={classes.itemImage} src={image} alt={name}></img>
        </div>

        <div className={classes.itemInfo}>
          <p className={classes.itemName}>{name}</p>
          <p className={classes.itemSize}>
            ({`${serving_size['count']} ${serving_size['unit']}`})
            <span className={classes.itemPrice}>
              {` - ${itemPrice}`}
            </span>
          </p>
        </div>
      </div>

      <div
        className={`${classes.btn}
        ${classes.deleteBtn}`}
        onClick={handleReplace}
        role={'presentation'}
      >
        Find Similar
      </div>

      <div
        className={classes.btn}
        onClick={() => addToCart(props, category)}
        role={'presentation'}>
        Save Item
      </div>

    </div >
  );
};

export default SuggesterCard;

SuggesterCard.propTypes = {
  _id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  serving_size: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  purchase_price: PropTypes.number.isRequired,
};

SuggesterCard.defaultProps = {
  image: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=6&m=1147544807&s=612x612&w=0&h=8CXEtGfDlt7oFx7UyEZClHojvDjZR91U-mAU8UlFF4Y=',
  purchase_size: { unit: 'unit', count: 1 },
  purchase_price: 0.00,
  serving_size: { unit: 'unit', count: 1 },
  servings_per: 1,
  category: 'other',
  quantity: 1,
  brand: '',
};
