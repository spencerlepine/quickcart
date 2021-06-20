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
import categoryDropdown from "./categoryDropdown"
import formatGroceryObj from "../../modules/formatGroceryObj"
import InputField from "./InputField"
import ProductFields from "./ProductFields/ProductFields"
import SearchPrompt from "./SearchPrompt/SearchPrompt"

const FormPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [thisGrocery, setThisGrocery] = useState({ ...schema });

  const [, setShowExitPrompt] = useExitPrompt(false);
  const [disableAdd, setDisableAdd] = useState(false);

  const { createGroceryItem, deleteGroceryItem, updateGroceryItem } = useGroceries()
  const { setCurrentNotification } = useNotification()
  const { allCategories, createNewCategory } = useCategories()
  const { setEditSelection, editSelection, searchSelection, setSearchSelection } = useForm()

  const currentlyEditing = !editSelection && !searchSelection
  const [showPopup, setShowPopup] = useState(!currentlyEditing);

  const clearForm = () => {
    setEditSelection(null)
    setThisGrocery({ ...schema });
  };

  // Load up a selected grocery item
  useEffect(() => {
    // populate the form if the user has selected to edit an item
    if (editSelection) {
      setThisGrocery(editSelection);
    } else if (searchSelection) {
      setThisGrocery(searchSelection);
    }
    setShowPopup(!editSelection && !searchSelection)
  }, []);

  const caclulateServingQuantity = (name, value) => {
    const currentGrocery = { ...thisGrocery }
    if (name === "serving_quantity" || name === "purchase_price") {
      const servingCost = parseFloat(currentGrocery["purchase_price"]) / parseFloat(currentGrocery["serving_quantity"])
      currentGrocery['serving_cost'] = Number.parseFloat(servingCost).toFixed(2)
    }
    setThisGrocery(currentGrocery)
  }

  const matchUnitSize = (name, value) => {
    if (name === 'purchase_size') {
      setThisGrocery(prevGrocery => ({
        ...prevGrocery,
        "unit_size": `${value}`
      }))
    }
  }

  const handleChange = (event) => {
    setShowExitPrompt(true)
    setDisableAdd(false)
    const { name, value } = event.target;
    caclulateServingQuantity(name, value);
    matchUnitSize(name, value);

    setThisGrocery((prevItems) => ({ ...prevItems, [name]: value }));
  };

  const handleDelete = (idToDelete) => {
    if (window.confirm("Delete permanently?")) {
      setShowExitPrompt(false)
      deleteGroceryItem(idToDelete);
      setEditSelection(null);
      history.push("/");
    }
  };

  const handleSubmit = (event) => {
    setShowExitPrompt(false)
    event.preventDefault();

    const filledObj = formatGroceryObj(thisGrocery)

    if (editSelection) {
      const currentId = editSelection._id
      const groceryId = thisGrocery._id

      // Make sure we are updating the existing item
      if (currentId === groceryId) {
        updateGroceryItem(filledObj, groceryId)
        // prevent double clicks
        setDisableAdd(true)
      }
    } else {
      createGroceryItem(filledObj)
      const groceryMessage = {
        message: `Saved ${thisGrocery._id || "item"}`,
        type: "success"
      }
      setCurrentNotification(groceryMessage)
    }

    history.push("/");
    setEditSelection(null)
    setSearchSelection(null)
    clearForm();
  };

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
      <SearchPrompt showPopup={showPopup} setShowPopup={setShowPopup} />
      <ThumbnailInput
        updateImageState={(newImg) => handleChange({ target: { name: "image", value: newImg } })}
        currentImage={thisGrocery.image} />

      <form className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          {InputField(thisGrocery, handleChange, "name", "Eggs", classes.itemName)}

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
              {categoryDropdown(allCategories)}
            </Select>
            <button onClick={handleAddCategory} className={classes.newCategoryBtn}>+</button>
          </div>

          <div className={classes.itemPriority}>
            <label>Preference</label>
            <br />
            <Rating
              name="priority"
              value={parseInt(thisGrocery.priority)}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={handleChange}
            />
          </div>

          {editSelection ? (
            <ClearButton
              className={classes.deleteButton}
              handleClick={() => handleDelete(editSelection._id)}
              label="Delete" />
          ) : (
            <ClearButton
              className={classes.deleteButton}
              handleClick={clearForm}
              label="Clear" />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.updateButton}
            onClick={handleSubmit}
            disabled={disableAdd}
          >
            {searchSelection ? "Update" : "Submit"}
          </Button>

          <hr /><hr />

          <div className={classes.importantFields}>
            <div className={classes.dollarSign}>
              <label className={classes.divLabel}>Purchase Price</label>
              <p className={classes.priceIndicator}>$</p>
              {InputField(thisGrocery, handleChange, "purchase_price", "2.50", classes.itemPrice, "number")}
            </div>

            <div className={`${classes.dollarSign} ${classes.itemServing}`}>
              <label className={classes.divLabel}>Servings Per:</label>
              <p className={classes.priceIndicator}>x</p>
              {InputField(thisGrocery, handleChange, "serving_quantity", "1", classes.itemPrice, "number")}
            </div>
          </div>
        </div>

        <ProductFields thisGrocery={thisGrocery} handleChange={handleChange} />

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
      </form>
    </div>
  );
};

export default withAuthRedirect(FormPage)
