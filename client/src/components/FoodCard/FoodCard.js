import React from "react"
import PropTypes from "prop-types"
import { setId } from "../../actions/selectedItem"
import { addToCart } from "../../actions/cart"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import searchMatch from "./searchMatch"
import useStyles from "./styles"

const getPriceColor = (priceFloat) => {
  if (priceFloat <= 0.10) {
    return "green" 
  } else if (priceFloat <= 0.20) {
    return "#9bb31c"
  } else if (priceFloat <= 0.30) {
    return "rgb(154 156 34)"
  } else if (priceFloat <= 0.40) {
    return "#b3851c"
  } else if (priceFloat <= 0.50) {
    return "#b3471c"
  }  else if (priceFloat > 0.50) {
    return "#7b2909"
  }
}
const FoodCard = ({ groceryItem, showProp=false }) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const userId = useSelector(state => state.connectedUser)
  const currentSearch = useSelector((state) => state.search)
  const currentSelectedCategory = useSelector((state) => state.selectedCategory)

  const handleEdit = (e) => {
    dispatch(setId(groceryItem.name))
    history.push("/form")
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    dispatch(addToCart(userId, groceryItem))
  }

  const selectionMatches = (currentSelectedCategory === null && currentSearch.length < 3) || (currentSelectedCategory === groceryItem.category)
  const showThisItem = selectionMatches || searchMatch(currentSearch, groceryItem.name)

  // Get the date last purchased
  let dateString = groceryItem["last_purchased"];
  let groceryExpirationDate = new Date(dateString);

  // Find out how many days it ussually lasts
  let groceryLifeSpan = Math.round(
    groceryItem["purchase_price"] / groceryItem["serving_cost"]
  );
  
  groceryExpirationDate.setDate(
    groceryExpirationDate.getDate() + groceryLifeSpan
  );

  // const todaysDate = new Date();
  // If it is past when it expired
  // let groceryExpired = !(todaysDate >= groceryExpirationDate);

  // show every thing if currentSearch.length < 3
  return (
    <>
      {(showThisItem || showProp) && (
        <div className={classes.foodCard} onClick={handleEdit}>
          <img
            alt={groceryItem.name}
            src={
              groceryItem.image ||
              "https://d2d8wwwkmhfcva.cloudfront.net/197x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-4bbe82b8555e4d1c12626fd482cb2409713e8e30835645ff3650ef66a725d03c.png"
            }
          ></img>
          <h4>{groceryItem.name}</h4>
          <p className={classes.foodPrice}>
            {parseFloat(
              groceryItem.purchase_price
              ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
            {" - "}
            <span className={classes.servingCost} style={{color: getPriceColor(groceryItem.serving_cost)}}>
              {parseFloat(
              groceryItem.serving_cost
              ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </span>
          </p>
          <p className={classes.foodSize}>{groceryItem.purchase_size}</p>
          <button onClick={handleAdd} className={classes.addButton}>
            +
          </button>
        </div>
      )}
    </>
  )
}

FoodCard.propTypes = {
  groceryItem: PropTypes.shape({
    name: PropTypes.string,
    purchase_price: PropTypes.number,
    purchase_size: PropTypes.string,
    serving_cost: PropTypes.number,
    category: PropTypes.string,
    last_purchased: PropTypes.string,
    priority: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default FoodCard
