import React from "react";
import PropTypes from "prop-types";
import { setId } from "../../actions/selectedItem";
import { addToCart } from "../../actions/cart";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import searchMatch from "./searchMatch";
import useStyles from "./styles";

const FoodItem = ({ groceryItem }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentSearch = useSelector((state) => state.search);

  const handleEdit = (e) => {
    dispatch(setId(groceryItem._id));
    history.push("/form");
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch(addToCart(groceryItem));
  };
  
  return (
    <>
      {(searchMatch(currentSearch, groceryItem.name) ||
        currentSearch.length < 3) && (
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
              groceryItem.purchase_price["$numberDecimal"]
            ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </p>
          <p className={classes.foodSize}>{groceryItem.purchase_size}</p>
          <button onClick={handleAdd} className={classes.addButton}>
            +
          </button>
        </div>
      )}
    </>
  );
};

FoodItem.propTypes = {
  groceryItem: PropTypes.shape({
    name: PropTypes.string,
    purchase_price: PropTypes.object,
    purchase_size: PropTypes.string,
    serving_cost: PropTypes.object,
    category: PropTypes.string,
    last_purchased: PropTypes.string,
    priority: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default FoodItem;
