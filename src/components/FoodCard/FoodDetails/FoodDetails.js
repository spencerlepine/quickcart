import React from "react"
// import useCart from "../../../context/CartContext/CartContext"
import useForm from "../../../context/FormContext/FormContext"
import { useHistory } from "react-router-dom"
// import useNotification from "../../../context/NotificationContext/NotificationContext.js"
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PriceIndicator from "./PriceIndicator"
import useStyles from "./styles"
import { NutritionLabel } from "react-fda-nutrition-facts"

const FoodDetails = ({ groceryItem, handleAdd }) => {
  const classes = useStyles()
  const history = useHistory()
  const { setEditSelection } = useForm()

  const handleEdit = (e) => {
    setEditSelection(groceryItem)
    history.push("/form")
  }

  const productPrice = parseFloat(
    groceryItem.purchase_price
  ).toLocaleString("en-US", { style: "currency", currency: "USD" })

  const servingPrice = parseFloat(groceryItem.serving_cost)
  const nutFacts = groceryItem.nutriscore_data

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
            </div>
          </div>

          <Rating
            name="priority"
            value={parseInt(groceryItem.priority)}
            precision={1}
            readOnly
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
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
          <NutritionLabel
            servingSize={nutFacts.serving_size}
            servingsPerContainer={nutFacts.serving_quantity || 1}
            calories={Math.round(nutFacts.energy * 0.23900573614) || 0}
            totalFat={nutFacts.fat || 0}
            saturatedFat={nutFacts["saturated-fat"] || 0}
            transFat={nutFacts["trans_fat"] || 0}
            cholesterol={nutFacts.cholesterol || 0}
            sodium={nutFacts.sodium || 0}
            totalCarbs={nutFacts["carbohydrates_serving"] || 0}
            dietaryFiber={nutFacts["fiber"] || 0}
            sugars={nutFacts.sugars || 0}
            protein={nutFacts.proteins || 0}
            vitaminA={nutFacts["vitamin-a"] || 0}
            vitaminC={nutFacts["vitamin-c"] || 0}
            calcium={nutFacts.calcium || 0}
            iron={nutFacts.iron || 0}
          />
        </div>
      </div>
    </div>
  )
}

export default FoodDetails