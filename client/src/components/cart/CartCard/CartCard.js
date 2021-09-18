import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useCart from 'context/CartContext/CartContext';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles.js';


const CartCard = props => {
  const classes = useStyles();
  const { _id, quantity, image, name, category, serving_size, purchase_price } = props;
  const { addToCart, removeFromCart } = useCart();
  const [itemFound, setItemFound] = useState(false);

  const toggleCompletion = () => {
    setItemFound(!itemFound);
  };

  const completionStyle = itemFound ? ({
    filter: 'opacity(0.4)',
  }) : {};

  const itemPrice = (
    parseFloat(purchase_price) *
    quantity
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className={`cart-card ${classes.cartCard}`}>
      <div className={classes.clickableElem} onClick={toggleCompletion} role="presentation" style={completionStyle}>
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

      {!itemFound ? (<>
        <div
          className={`${classes.btn}
        ${classes.deleteBtn}`}
          onClick={() => removeFromCart(_id, category)}
          role={'presentation'}
        >
          -
        </div>

        <p className={classes.itemCount}>{quantity}</p>

        <div
          className={classes.btn}
          onClick={() => addToCart(props, category)}
          role={'presentation'}>
          +
        </div>
      </>) : (<>
        <CheckCircleIcon onClick={toggleCompletion} className={classes.foundIcon} fontSize="large" />
      </>)}

    </div >
  );
};

export default CartCard;

CartCard.propTypes = {
  _id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  serving_size: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  purchase_price: PropTypes.number.isRequired,
};

CartCard.defaultProps = {
  image: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=6&m=1147544807&s=612x612&w=0&h=8CXEtGfDlt7oFx7UyEZClHojvDjZR91U-mAU8UlFF4Y=',
  purchase_size: { unit: 'unit', count: 1 },
  purchase_price: 0.00,
  serving_size: { unit: 'unit', count: 1 },
  servings_per: 1,
  category: 'other',
  quantity: 1,
  brand: '',
};

