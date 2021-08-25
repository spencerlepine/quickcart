import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from 'components/ui/AddToCartButton/AddToCartButton';
import EditItemButton from 'components/ui/EditItemButton/EditItemButton';
import useStyles from './styles.js';

const ProductDetails = props => {
  const classes = useStyles();
  const {
    // _id,
    isSavedProducts,
    name,
    purchase_size,
    purchase_price,
    // serving_size,
    // servings_per,
    // image,
    brand,
    category,
  } = props;

  const productPrice = parseFloat(
    purchase_price,
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  // const servingPrice = parseFloat(serving_cost);
  console.log({ ...props });

  return (
    <div className={`product-details ${classes.productDetails}`}>
      <div className={classes.productDetails}>
        <h4 className={classes.foodName}>{name}</h4>

        <p className={classes.foodPrice}>
          {productPrice}
        </p>

        <div className={classes.itemSpecifications}>
          <p className={`${classes.foodBrand} ${classes.productSpecification}`}>
            {brand}
          </p>

          <p className={`${classes.purchaseSize} ${classes.productSpecification}`}>
            Size: {`${purchase_size['count']} ${purchase_size['unit']}`}
          </p>
        </div>
      </div>

      <AddToCartButton className={classes.addToCartBtn} item={{ ...props }} categoryID={category} />
      {isSavedProducts && <EditItemButton item={{ ...props }} isExternalProduct={!isSavedProducts} />}
    </div >
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  _id: PropTypes.string.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  purchase_size: PropTypes.object.isRequired,
  purchase_price: PropTypes.number.isRequired,
  serving_size: PropTypes.object.isRequired,
  servings_per: PropTypes.number.isRequired,
  brand: PropTypes.string,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

ProductDetails.defaultProps = {
  minimalFormat: false,
  isSavedProducts: false,
  loadProductFromID: true,
  purchase_size: { unit: 'unit', count: 1 },
  purchase_price: 0.00,
  serving_size: { unit: 'unit', count: 1 },
  servings_per: 1,
  category: 'other',
  brand: '',
};