import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setId } from "../../../actions/selectedItem";

import useStyles from "./styles";

const PantryItem = ({ groceryItem }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = (e) => {
    dispatch(setId(groceryItem.name));
    history.push("/form");
  };

  // Get the date last purchased
  let dateString = groceryItem["last_purchased"];
  let groceryExpirationDate = new Date(dateString);

  // Find out how many days it ussually lasts
  let groceryLifeSpan = Math.round(
    groceryItem["purchase_price"] / groceryItem["serving_cost"]
  );

  groceryExpirationDate.setTime(
    groceryExpirationDate.getTime() + groceryLifeSpan * (1000 * 60 * 60 * 24)
  );

  let todaysDate = new Date();

  const groceryNotExpired =
    groceryExpirationDate.getTime() >= todaysDate.getTime();

  return (
    <>
      {groceryNotExpired && (
        <div className={classes.foodCard} onClick={handleEdit}>
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
      )}
    </>
  );
};

export default PantryItem;
