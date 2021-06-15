import React from "react"
import getPriceColor from "../../../modules/getPriceColor"
import missingImage from "../../../images/missing.jpeg"
import useStyles from "./styles"

const ProductThumbnail = ({ groceryItem, handleAdd }) => {
  const classes = useStyles()

  const productPrice = parseFloat(
    groceryItem.purchase_price
  ).toLocaleString("en-US", { style: "currency", currency: "USD" })

  return (
    <div className={classes.foodCard}>
      <img
        alt={groceryItem.name}
        src={
          groceryItem.image ||
          "https://d2d8wwwkmhfcva.cloudfront.net/197x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-4bbe82b8555e4d1c12626fd482cb2409713e8e30835645ff3650ef66a725d03c.png"
        }
      ></img>
      <h4 className={classes.foodName}>{groceryItem.name}</h4>
      
      <p className={classes.foodPrice} style={{color: getPriceColor(groceryItem.serving_cost)}}>
        {productPrice}
      </p>

      <p className={classes.purchaseSize}>
          {groceryItem.purchase_size}
      </p>

      <p className={classes.foodSize}>{}</p>
      <button onClick={handleAdd} className={classes.addButton}>
        +
      </button>
    </div>
  )
}

ProductThumbnail.defaultProps = {
  groceryItem: {
    name: 'Unkown',
    purchase_price: "0.0",
    purchase_size: "1 oz",
    serving_cost: "0.0",
    serving_size: "1 oz",
    brand: "unknown",
    nutrition_score: "",
    image: missingImage,
    priority: "0",
    ingredients: "",
  },
  handleAdd: () => {},
};

export default ProductThumbnail