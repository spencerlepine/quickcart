import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useExitPrompt from '../../hooks/useExitPrompt/useExitPrompt.js'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ThumbnailInput from "./ThumbnailInput/ThumbnailInput";
import useNotification from "../../context/NotificationContext/NotificationContext.js";
import useGroceries from "../../context/GroceriesContext/GroceriesContext.js";
import useCategories from "../../context/CategoriesContext/CategoriesContext"
import useStyles from "./styles.js";
import useForm from "../../context/FormContext/FormContext.js";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import schema from "../../schema/groceryItem"
import ClearButton from "./ClearButton"
import toTitleCase from "../../modules/toTitleCase"
import formatGroceryObj from "../../modules/formatGroceryObj"

const FormPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [thisGrocery, setThisGrocery] = useState(schema);
  const [, setShowExitPrompt] = useExitPrompt(false);
  const [dropdownCategories, setDropdownCategories] = useState([]);

  const { createGroceryItem, deleteGroceryItem, updateGroceryItem } = useGroceries()
  const { setCurrentNotification } = useNotification()
  const { allCategories, createNewCategory } = useCategories()
  const { setCurrentId, searchSelection, setCurrentImageSelection, currentImageSelection } = useForm()

  useEffect(() => {
    // Map the categories to option elements
    let categoryOptions = allCategories.map((category, i) => {
      return <option key={i} value={category}>{toTitleCase(category)}</option>;
    });

    // Save the list to state
    if (searchSelection) {
      setDropdownCategories(categoryOptions);
    } else {
      setDropdownCategories(() => [
        <option label="None" value="" key={999} />,
        ...categoryOptions,
      ]);
    }
    return
  }, [allCategories]);

  const clearForm = () => {
    setCurrentId(null)
    setCurrentImageSelection(null)
    setThisGrocery(schema);
  };

  // Load up a selected grocery item
  useEffect(() => {
    // populate the form if the user has selected to edit an item
    if (searchSelection) {
      setCurrentImageSelection(searchSelection.image)
      setThisGrocery(searchSelection);
    }
  }, []);

  const handleChange = (event) => {
    setShowExitPrompt(true)
    const { name, value } = event.target;

    setThisGrocery((prevItems) => ({ ...prevItems, [name]: value }));
  };

  const handleDelete = () => {
    if (window.confirm("Delete permanently?")) {
      setShowExitPrompt(false)
      deleteGroceryItem(searchSelection._id);
      history.push("/");
    }
  };

  const handleSubmit = (event) => {
    setShowExitPrompt(false)
    event.preventDefault();
    if (searchSelection) {
      // Check if the user changed any fields
      const formItemStr = JSON.stringify(thisGrocery)
      const currentItemStr = JSON.stringify(searchSelection)
      if (formItemStr !== currentItemStr && thisGrocery.name === searchSelection.name) {
        const groceryId = searchSelection.name
        updateGroceryItem(thisGrocery, groceryId)
      }
      history.push("/");
      clearForm();
    } else {
      const groceryMessage = {
        message: `Saved ${thisGrocery.name || "item"}`,
        type: "success"
      }
      setCurrentNotification(groceryMessage)
      const filledObj = formatGroceryObj(thisGrocery)
      createGroceryItem(filledObj)
      history.push("/");
      clearForm();
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

  const handleAddCategory = (e) => {
    e.preventDefault()

    const newCategory = prompt("Name the new category: ")


    if (typeof newCategory === "string" && newCategory.length) {
      createNewCategory(newCategory.toLowerCase())
      // Save this category to state
      setThisGrocery(prevObj => ({
        ...prevObj,
        category: newCategory
      }))
    } else if (newCategory) {
      const importMessage = {
        name: "Invalid Name!",
        message: `please try again`,
      }
      setCurrentNotification(importMessage)
    }
  }

  return (
    <div className={classes.formContainer}>
      <ThumbnailInput
        handleChange={handleChange}
        currentImage={currentImageSelection}
        setCurrentImageSelection={setCurrentImageSelection} />

      <form className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          {Field("name", "Eggs", classes.itemName)}


          <div><label className={classes.divLabel}>Unit Size</label>
            {Field("purchase_size", "Dozen", classes.itemSize)}</div>

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
            <button onClick={handleAddCategory} className={classes.newCategoryBtn}>+</button>
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

          {searchSelection ? (
            <ClearButton
              className={classes.deleteButton}
              handleClick={handleDelete}
              label="Delete" />
          ) : (
            <ClearButton
              className={classes.deleteButton}
              handleClick={handleClear}
              label="Clear" />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.updateButton}
            onClick={handleSubmit}
          >
            {searchSelection ? "Update" : "Submit"}
          </Button>

          {Object.keys(schema).map(key => Field(key, thisGrocery[key], classes.itemSize))}
        </div>
      </form>
    </div>
  );
};

export default withAuthRedirect(FormPage)
