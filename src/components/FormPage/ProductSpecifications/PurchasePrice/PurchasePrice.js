import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles.js";

const PurchasePrice = ({ handleChange, thisGrocery }) => {
  const classes = useStyles();

  return (
    <div className={classes.purchasePrice}>
      <label className={classes.divLabel}>Purchase Price</label>
      <p className={classes.priceIndicator}>$</p>
      <TextField
        className={classes.itemPrice}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
        type={"number"}
        fullWidth
        name={"purchase_price"}
        placeholder={"1.50"}
        value={thisGrocery["purchase_price"]}
        inputProps={{ step: 0.5, min: 0 }}
      />
    </div>
  );
};

export default PurchasePrice
