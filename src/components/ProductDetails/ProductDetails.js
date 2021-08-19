import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from 'components/ui/AddToCartButton/AddToCartButton';
import EditItemButton from 'components/ui/EditItemButton/EditItemButton';
import useStyles from './styles.js';

const ProductDetails = ({ item, canEdit }) => {
  const classes = useStyles();

  const productPrice = parseFloat(
    item.purchase_price,
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  // const servingPrice = parseFloat(item.serving_cost);

  return (
    <div className={`productDetails ${classes.productDetails}`}>
      <div className={classes.productDetails}>
        <h4 className={classes.foodName}>{item.name}</h4>

        <p className={classes.foodPrice}>
          {productPrice}
        </p>

        <div className={classes.itemSpecifications}>
          <p className={`${classes.foodBrand} ${classes.productSpecification}`}>
            {item.brand}
          </p>

          <p className={`${classes.purchaseSize} ${classes.productSpecification}`}>
            Size: {item.purchase_size}
          </p>
        </div>
      </div>

      <AddToCartButton />
      {canEdit && <EditItemButton />}
    </div >
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  item: PropTypes.object.isRequired,
  canEdit: PropTypes.bool.isRequired,
};
