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
            servingSize={'1 cup (228g)'}
            servingsPerContainer={2}
            calories={260}
            totalFat={13}
            saturatedFat={5}
            transFat={2}
            cholesterol={30}
            sodium={660}
            totalCarbs={31}
            dietaryFiber={0}
            sugars={5}
            protein={5}
            vitaminA={4}
            vitaminC={2}
            calcium={15}
            iron={4}
          />
        </div>
      </div>
    </div>
  )
}

export default FoodDetails