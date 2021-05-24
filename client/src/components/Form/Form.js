import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGrocery, deleteGrocery, updateGrocery, saveLocalGrocery } from "../../actions/groceries";
import { setId } from "../../actions/selectedItem";
import { setSearchQuery } from "../../actions/search";
import { setSelectedCategory } from "../../actions/selectedCategory";
import FileBase from "react-file-base64";
import useExitPrompt from '../../hooks/useExitPrompt/useExitPrompt.js'
import { SET_CURRENT_ERROR } from "../../constants/actionTypes.js"
import { createNewCategory } from "../../actions/categories"

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CropInputImage from "./CropInputImage";
import useStyles from "./styles.js";

const todaysDate = new Date().toISOString().slice(0, 10);

const schema = {
  name: "",
  purchase_price: "",
  purchase_size: "",
  serving_cost: "",
  category: "",
  last_purchased: todaysDate,
  priority: "0",
  image: "",
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const Form = () => {
  const categories = useSelector((state) => state.categories);
  const [, setShowExitPrompt] = useExitPrompt(false);

  const [thisGrocery, setThisGrocery] = useState(schema);
  const [dropdownCategories, setDropdownCategories] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = useSelector((state) => state.connectedUser);
  const currentName = useSelector((state) => state.selectedItem);
  const currentItem = useSelector((state) =>
    currentName
      ? state.groceries.find((item) => item.name === currentName)
      : null
  );

  useEffect(() => {
    dispatch(setSearchQuery(""));
    dispatch(setSelectedCategory(null));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      setShowExitPrompt(false)
    }
  }, [setShowExitPrompt])

  useEffect(() => {
    let categoryOptions = categories.map((category) => {
      return <option value={category}>{toTitleCase(category)}</option>;
    });
    setDropdownCategories((prevCategories) => [
      <option label="None" value="" />,
      ...categoryOptions,
    ]);
  }, [categories]);

  const clearForm = () => {
    dispatch(setId(null));
    setThisGrocery(schema);
  };

  useEffect(() => {
    // Populate the form if the user selected an item
    if (currentName && currentItem) {
      // Translate the purchase price decimal data for the form to read
      let validCurrentItem = {
        ...currentItem,
        image: currentItem.image || schema.image,
      };

      setThisGrocery(validCurrentItem);
    }
  }, [currentName, currentItem]);

  const handleChange = (event) => {
    setShowExitPrompt(true)
    const { name, value } = event.target;

    setThisGrocery((prevItems) => ({ ...prevItems, [name]: value }));
  };

  const handleDelete = () => {
    if (window.confirm("Delete permanently?")) {
      setShowExitPrompt(false)
      dispatch(deleteGrocery(userId, currentItem.name));
      history.push("/");
    }
  };

  const handleImageInput = async (base64) => {
    const croppedImage = await CropInputImage(base64);

    handleChange({ target: { name: "image", value: croppedImage } });
  };

  const handleSubmit = (event) => {
    setShowExitPrompt(false)
    event.preventDefault();

    if (currentName) {
      const formItemStr = JSON.stringify(thisGrocery) 
      const currentItemStr = JSON.stringify(currentItem) 
      if (formItemStr !== currentItemStr) {
        dispatch(updateGrocery(userId, thisGrocery));
      }
      history.push("/");
      clearForm();
    } else if (
      thisGrocery.name &&
      thisGrocery.purchase_price &&
      thisGrocery.purchase_size &&
      thisGrocery.serving_cost &&
      thisGrocery.category &&
      thisGrocery.last_purchased &&
      thisGrocery.priority &&
      thisGrocery.image
    ) {
      dispatch(createGrocery(userId, thisGrocery));
      dispatch(saveLocalGrocery(userId, thisGrocery))
      history.push("/");
      clearForm();
    } else {
      alert("Please enter valid data");
    }
  };

  const Field = (name, placeholder, thisClass = "") => (
    <TextField
      className={thisClass}
      onChange={handleChange}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name={name}
      placeholder={placeholder || name}
      value={thisGrocery[name]}
    />
  );

  const handleClear = () => {
    setThisGrocery(schema)
  }

  const ClearButton = () => (
    <Button
      onClick={handleClear}
      color="secondary"
      fullWidth
      variant="contained"
      className={classes.deleteButton}
    >
      Clear
    </Button>
  )

  const handleAddCategory = (e) => {
    e.preventDefault()
    const newCategory = prompt("Name the new category: ")

    if (typeof newCategory === "string") {
      dispatch(createNewCategory(userId, newCategory))
    } else {
      const importMessage = {
        name: "Invalid Name!",
        message: `please try again`,
      }
      dispatch({ type: SET_CURRENT_ERROR, payload: importMessage })
    }
  }

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <div className={classes.imageContainer}>
          {thisGrocery.image ? (
            <>
              <img src={thisGrocery.image} alt={thisGrocery.name}></img>
              <button
                onClick={() =>
                  handleChange({ target: { name: "image", value: "" } })
                }
              >
                X
              </button>
            </>
          ) : (
            <div className={`${classes.fileInput}`}>
              <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => {
                    handleImageInput(base64);
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className={classes.itemDetails}>
          {Field("name", "Eggs", classes.itemName)}

          {Field("purchase_size", "Dozen", classes.itemSize)}

          <div className={classes.dollarSign}>
            <label className={classes.divLabel}>Purchase Price</label>
            <p className={classes.priceIndicator}>$</p>
            {Field("purchase_price", "2.50", classes.itemPrice)}
          </div>

          <div className={classes.itemCategory}>
            <label className={classes.divLabel}>Category</label>
            <br />
            <Select
              native
              value={thisGrocery.category}
              onChange={handleChange}
              inputProps={{
                name: "category",
                id: "age-native-simple",
              }}
            >
              {dropdownCategories}
            </Select>
            <button onClick={handleAddCategory}>+</button>
          </div>

          <div className={`${classes.dollarSign} ${classes.itemServing}`}>
            <label className={classes.divLabel}>Serving Cost:</label>
            <p className={classes.priceIndicator}>$</p>
            {Field("serving_cost", "1.49", classes.itemPrice)}
          </div>

          <div className={classes.itemPriority}>
            <label>Priority</label>
            <br />
            <Rating
              name="priority"
              value={parseInt(thisGrocery.priority)}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={handleChange}
            />
          </div>

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

          {currentName ? (
            <Button
              onClick={handleDelete}
              color="secondary"
              fullWidth
              variant="contained"
              className={classes.deleteButton}
            >
              Delete
            </Button>
          )
          :
          (<ClearButton />)}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.updateButton}
          >
            {currentName ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
