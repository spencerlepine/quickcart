import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from 'components/ui/AddToCartButton/AddToCartButton';
import Popup from 'components/ui/Popup/Popup';
import ProductDetails from 'components/ProductDetails/ProductDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles.js';

const Card = props => {
  const classes = useStyles();

  const {
    _id,
    name,
    purchase_size,
    purchase_price,
    image,
    serving_size,
    servings_per,
    brand,
    category,
    // loadProductFromID,
    minimalFormat,
    isSavedProducts,
  } = props;

  // useEffect(() => {
  //   if (loadProductFromID !== undefined) {
  //     // fetchItem(item['loadProductFromID']);
  //   }
  // }, []);

  const productPrice = parseFloat(
    purchase_price,
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  if (minimalFormat) {
    return (
      <div className={`card ${classes.card}`}>
        <Popup
          DefaultElem={(
            <div className={classes.minimalCard}>
              <div className={classes.imageContainer}>
                <img alt={name} src={image}></img>
              </div>

              <h4 className={classes.foodName}>{name}</h4>

              <p className={classes.foodPrice}>{productPrice}</p>

              <div className={classes.expandButton}>
                <ExpandMoreIcon />
              </div>
            </div>
          )}
          PopupElem={<ProductDetails {...props} />}
        />
      </div>
    );
  } else {
    return (
      <div className={`card ${classes.card}`}>
        <Popup
          DefaultElem={(
            <div className={classes.minimalCard}>
              <AddToCartButton isBubbleBtn={!minimalFormat} item={props} categoryID={category} />
              <div className={classes.imageContainer}>
                <img alt={name} src={image}></img>
              </div>

              <h4 className={classes.foodName}>{name}</h4>

              <p className={classes.foodPrice}>{productPrice}</p>

              <p className={classes.purchaseSize}>{`${purchase_size['count']} ${purchase_size['unit']}`}</p>

              <div className={classes.expandButton}>
                <ExpandMoreIcon />
              </div>
            </div>
          )}
          PopupElem={<ProductDetails
            _id={_id}
            name={name}
            purchase_size={purchase_size}
            purchase_price={purchase_price}
            serving_size={serving_size}
            servings_per={servings_per}
            brand={brand}
            image={image}
            category={category}
            isSavedProducts={isSavedProducts} />}
        />
      </div>
    );
  }
};

export default Card;

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  purchase_size: PropTypes.object.isRequired,
  purchase_price: PropTypes.number.isRequired,
  serving_size: PropTypes.object.isRequired,
  servings_per: PropTypes.number.isRequired,
  brand: PropTypes.string,
  category: PropTypes.string.isRequired,
  loadProductFromID: PropTypes.bool,
  minimalFormat: PropTypes.bool,
  isSavedProducts: PropTypes.bool,
};

Card.defaultProps = {
  minimalFormat: false,
  isSavedProducts: false,
  loadProductFromID: true,
  image: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=6&m=1147544807&s=612x612&w=0&h=8CXEtGfDlt7oFx7UyEZClHojvDjZR91U-mAU8UlFF4Y=',
  purchase_size: { unit: 'unit', count: 1 },
  purchase_price: 0.00,
  serving_size: { unit: 'unit', count: 1 },
  servings_per: 1,
  category: 'other',
  brand: '',
};
