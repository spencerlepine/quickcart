import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import useStyles from "./styles.js";

const ProductRating = ({ handleChange, rating }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemPriority}>
      <label>Preference</label>
      <br />
      <Rating
        name="priority"
        value={rating}
        precision={1}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductRating
