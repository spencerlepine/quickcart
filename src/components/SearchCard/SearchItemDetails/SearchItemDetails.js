import React from 'react';
import useStyles from './styles';
import formatGroceryObj from '../../../modules/formatGroceryObj';
import useNotification from '../../../context/NotificationContext/NotificationContext.js';
import useGroceries from '../../../context/GroceriesContext/GroceriesContext.js';
import { useHistory } from 'react-router-dom';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PriceIndicator from './PriceIndicator';
import ScoreElement from './ScoreElement/ScoreElement';

const SearchItemDetails = ({ product, handleAdd }) => {
  const formattedProduct = formatGroceryObj(product);
  const classes = useStyles();
  const history = useHistory();

  const { createGroceryItem } = useGroceries();
  const { setCurrentNotification } = useNotification();

  const handleSave = (e) => {
    createGroceryItem(formattedProduct);
    const groceryMessage = {
      message: `Saved ${formattedProduct.name || 'item'}`,
      type: 'success'
    }
    setCurrentNotification(groceryMessage);
    history.push('/');
  }

  const productPrice = parseFloat(
    formattedProduct.purchase_price
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const servingPrice = parseFloat(formattedProduct.serving_cost);
  const nutriScore = formattedProduct.nutriscore_data.grade;

  return (
    <div className={classes.popupContainer}>
      <div className={classes.popupElement}>
        <div className={classes.productGrid}>
          <img alt={formattedProduct.name} src={formattedProduct.image} className={classes.productImage}></img>

          <div className={classes.productDetails}>
            <h4 className={classes.foodName}>{formattedProduct.name}</h4>

            <p className={classes.foodPrice}>
              {productPrice}
            </p>

            <PriceIndicator
              className={`${classes.servingCost} ${classes.productSpecification}`}
              priceInt={servingPrice} />

            <br />

            <div className={classes.extraDetials}>
              <p className={`${classes.foodBrand} ${classes.productSpecification}`}>
                {formattedProduct.brand}
              </p>

              <p className={`${classes.purchaseSize} ${classes.productSpecification}`}>
                Size: {formattedProduct.purchase_size}
              </p>

              {nutriScore && <p className={`${classes.itemGrade} ${classes.productSpecification}`}>
                Grade: {<ScoreElement nutriScore={nutriScore} />}
              </p>}
            </div>
          </div>

          <button className={classes.addButton}
            onClick={handleSave}>
            <span className={classes.cartIcon}><SaveAltIcon /></span>
            SAVE ITEM
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchItemDetails;