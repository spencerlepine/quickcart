import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from 'components/ui/AddToCartButton/AddToCartButton';
import EditItemButton from 'components/ui/EditItemButton/EditItemButton';
import useStyles from './styles.js';

const ProductDetails = props => {
  const classes = useStyles();
  const {
    _id,
    canEdit,
    name,
    purchase_size,
    purchase_price,
    // serving_size,
    // servings_per,
    // image,
    brand,
    // cateogry,
  } = props;

  const productPrice = parseFloat(
    purchase_price,
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  // const servingPrice = parseFloat(serving_cost);

  return (
    <div className={`productDetails ${classes.productDetails}`}>
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

      <AddToCartButton className={classes.addToCartBtn} itemID={_id} />
      {canEdit && <EditItemButton />}
    </div >
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  _id: PropTypes.string.isRequired,
  canEdit: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  purchase_size: PropTypes.object.isRequired,
  purchase_price: PropTypes.number.isRequired,
  serving_size: PropTypes.object.isRequired,
  servings_per: PropTypes.number.isRequired,
  brand: PropTypes.string,
  category: PropTypes.string.isRequired,
};