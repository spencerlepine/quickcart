import React from "react"
import useCart from "../../context/CartContext/CartContext"
import useForm from "../../context/FormContext/FormContext"
import { useHistory } from "react-router-dom"
import getPriceColor from "./getPriceColor"
import useSearch from "../../context/SearchContext/SearchContext"
import searchMatches from "./searchMatches"
import useStyles from "./styles"

const FoodCard = ({ groceryItem, hideCard=false }) => {
  const classes = useStyles()
  const history = useHistory()
  const { currentSearch, categorySelection } = useSearch()

  const { setCurrentId } = useForm()
  const { addItemToCart } = useCart()

  const handleEdit = (e) => {
    const groceryToEdit = groceryItem.name
    setCurrentId(groceryToEdit)
    history.push("/form")
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    addItemToCart(groceryItem)
  }

  if (hideCard) {
    return null
  }

  if (!searchMatches(currentSearch, groceryItem) || categorySelection !== groceryItem.category) {
    return null;
  }

  return (
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
  )
}

export default FoodCard
