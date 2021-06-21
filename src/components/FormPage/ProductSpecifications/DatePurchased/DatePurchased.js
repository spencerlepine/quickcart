import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles.js";

const DatePurchased = ({ handleChange, thisGrocery }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemDate}>
      <TextField
        name="last_purchased"
        label="Last Purchased"
        type="date"
        value={thisGrocery.last_purchased}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePurchased
