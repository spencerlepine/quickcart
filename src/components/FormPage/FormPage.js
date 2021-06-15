import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import useExitPrompt from '../../hooks/useExitPrompt/useExitPrompt.js'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CropInputImage from "./CropInputImage";
import useNotification from "../../context/NotificationContext/NotificationContext.js";
import useGroceries from "../../context/GroceriesContext/GroceriesContext.js";
import useCategories from "../../context/CategoriesContext/CategoriesContext"
import useStyles from "./styles.js";
import missingImage from "../../images/missing.jpeg"
import useForm from "../../context/FormContext/FormContext.js";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import schema from "../../schema/groceryItem"
import ClearButton from "./ClearButton"

function fillPlaceholders(formObj) {
  const { name } = formObj
  const formattedName = name ? name.replace(/-/gi, " ") : ""
  let placeholderVals = { 
    ...formObj,
    name: formattedName || "unknown",
    purchase_price: formObj["purchase_price"] || "0",
    purchase_size: formObj["purchase_size"] || "n/a",
    serving_cost: formObj["serving_cost"] || formObj["purchase_price"] || "0",
    category: formObj["category"] || "unknown",
    image: formObj["image"] || missingImage,
  }
  return placeholderVals
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const FormPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [thisGrocery, setThisGrocery] = useState(schema);
  const [, setShowExitPrompt] = useExitPrompt(false);
  const [dropdownCategories, setDropdownCategories] = useState([]);

  const { createGroceryItem, deleteGroceryItem, updateGroceryItem, allGroceryItems } = useGroceries()
  const { setCurrentNotification } = useNotification()
  const { allCategories, createNewCategory } = useCategories()
  const { currentId, setCurrentId, searchSelection } = useForm()
  
  // FIX: Hard-coded search for 'name' key
  const currentItem = allGroceryItems.find((item) => item.name === currentId)

  useEffect(() => {
    // Map the categories to option elements
    let categoryOptions = allCategories.map((category, i) => {
      return <option key={i} value={category}>{toTitleCase(category)}</option>;
    });

    // Save the list to state
    if (currentItem) {
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
    setThisGrocery(schema);
  };

  // Load up a selected grocery item
  useEffect(() => {
    let validCurrentItem;
    // Populate the form if the user selected an item
    if (currentId && currentItem) {
      setCurrentId(currentId)
      // Translate the purchase price decimal data for the form to read
      validCurrentItem = {
        ...currentItem,
        image: currentItem.image || schema.image,
      };

      setThisGrocery(validCurrentItem);
    } else if (searchSelection) {
      validCurrentItem = {
        ...searchSelection,
        image: searchSelection.image || schema.image,
      };

      setThisGrocery(validCurrentItem);
    }
  }, [currentId, currentItem, searchSelection]);

  const handleChange = (event) => {
    setShowExitPrompt(true)
    const { name, value } = event.target;

    setThisGrocery((prevItems) => ({ ...prevItems, [name]: value }));
  };

  const handleDelete = () => {
    if (window.confirm("Delete permanently?")) {
      setShowExitPrompt(false)
      deleteGroceryItem(currentItem.name);
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
    if (currentId) {
      // Check if the user changed any fields
      const formItemStr = JSON.stringify(thisGrocery) 
      const currentItemStr = JSON.stringify(currentItem) 
      if (formItemStr !== currentItemStr && thisGrocery.name === currentItem.name) {
        const groceryId = currentItem.name
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
      const filledObj = fillPlaceholders(thisGrocery)
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

          {currentId ? (
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
          >
            {currentId ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withAuthRedirect(FormPage)
