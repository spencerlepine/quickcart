import React from 'react';
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PriceIndicator from './PriceIndicator';
import useForm from '../../context/FormContext/FormContext';
import { FORM } from "../../constants/routeConstants";
import NutritionFacts from './NutritionFacts/NutritionFacts';
import ScoreElement from './ScoreElement/ScoreElement';
import useStyles from './styles';

const FoodDetails = ({ groceryItem, handleAdd }) => {
  const classes = useStyles();
  const history = useHistory();
  const { setEditSelection } = useForm();

  const handleEdit = (e) => {
    setEditSelection(groceryItem);
    history.push(FORM);
  };

  const productPrice = parseFloat(
    groceryItem.purchase_price
  ).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const servingPrice = parseFloat(groceryItem.serving_cost);
  const nutriScore = groceryItem.nutriscore_data.grade;

  return (
    <div className={classes.popupContainer}>
      <div className={classes.popupElement}>
        <div className={classes.productGrid}>
          <img alt={groceryItem.name} src={groceryItem.image} className={classes.productImage}></img>

          <div className={classes.productDetails}>
            <h4 className={classes.foodName}>{groceryItem.name}</h4>

            <p className={classes.foodPrice}>
              {productPrice}
            </p>

            <PriceIndicator
              className={`${classes.servingCost} ${classes.productSpecification}`}
              priceInt={servingPrice} />

            <br />

            <div className={classes.extraDetials}>
              <p className={`${classes.foodBrand} ${classes.productSpecification}`}>
                {groceryItem.brand}
              </p>

              <p className={`${classes.purchaseSize} ${classes.productSpecification}`}>
                Size: {groceryItem.purchase_size}
              </p>

              {nutriScore && <p className={`${classes.itemGrade} ${classes.productSpecification}`}>
                Grade: {<ScoreElement nutriScore={nutriScore} />}
              </p>}
            </div>
          </div>

          <Rating
            name='priority'
            value={parseInt(groceryItem.priority)}
            precision={1}
            readOnly
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
            className={classes.productRating}
          />

          <p></p>

          <button className={classes.editButton}
            onClick={handleEdit}>
            Edit Item
          </button>

          <button className={classes.addButton}
            onClick={handleAdd}>
            <span className={classes.cartIcon}><AddShoppingCartIcon /></span>
            ADD TO CART
          </button>


          <p></p>
        </div>
        <div className={classes.nutritionDetials}>
          <NutritionFacts
            nutFacts={groceryItem.nutriscore_data}
            servingSize={groceryItem.serving_size}
            servingQuantity={groceryItem.serving_quantity}>
          </NutritionFacts>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;