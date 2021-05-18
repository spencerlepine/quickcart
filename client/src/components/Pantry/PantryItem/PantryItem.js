import React from "react";
import useStyles from "./styles";

const PantryItem = ({ groceryItem }) => {
  const classes = useStyles();

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
  let todaysDate = new Date()
  todaysDate.setDate(todaysDate.getDate())
  const groceryNotExpired = groceryExpirationDate.getDate() >= todaysDate.getDate()

  return (
    <>{groceryNotExpired && (
      <div className={classes.foodCard}>
        <img
          alt={groceryItem.name}
          src={
            groceryItem.image ||
            "https://d2d8wwwkmhfcva.cloudfront.net/197x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-4bbe82b8555e4d1c12626fd482cb2409713e8e30835645ff3650ef66a725d03c.png"
          }
        ></img>
        <h4>{groceryItem.name}</h4>
        
        <p className={classes.foodSize}>{groceryItem.purchase_size}</p>
      </div>
    )}</>
  );
};

export default PantryItem;
