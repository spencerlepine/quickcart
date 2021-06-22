import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles.js";

const ServingCount = ({ handleChange, thisGrocery }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.dollarSign} ${classes.itemServing}`}>
      <label className={classes.divLabel}>Servings Per</label>
      <p className={classes.priceIndicator}>x</p>
      <TextField
        className={classes.itemPrice}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
        type={"number"}
        fullWidth
        name={"serving_quantity"}
        placeholder={"1"}
        value={thisGrocery["serving_quantity"]}
        inputProps={{ min: 1 }}
      />
    </div>
  );
};

export default ServingCount;
