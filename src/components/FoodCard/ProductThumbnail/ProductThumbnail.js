import React from "react"
import getPriceColor from "../../../modules/getPriceColor"
import useStyles from "./styles"

const ProductThumbnail = ({ groceryItem, handleAdd }) => {
  const classes = useStyles()

  const productPrice = parseFloat(
    groceryItem.purchase_price
  ).toLocaleString("en-US", { style: "currency", currency: "USD" })

  return (
    <div className={classes.foodCard}>
      <div className={classes.imageContainer}>
        <img alt={groceryItem.name} src={groceryItem.image}></img>
      </div>
      <h4 className={classes.foodName}>{groceryItem.name}</h4>

      <p className={classes.foodPrice} style={{ color: getPriceColor(groceryItem.serving_cost) }}>
        {productPrice}
      </p>

      <p className={classes.purchaseSize}>
        {`(${groceryItem.purchase_size})`}
      </p>

      <p className={classes.foodSize}>{ }</p>
      <button onClick={handleAdd} className={classes.addButton}>
        +
      </button>
    </div>
  )
}

export default ProductThumbnail