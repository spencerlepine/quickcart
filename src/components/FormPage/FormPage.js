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
import useForm from "../../context/FormContext/FormContext.js";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"

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

const FormPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [thisGrocery, setThisGrocery] = useState(schema);
  const [, setShowExitPrompt] = useExitPrompt(false);
  const [dropdownCategories, setDropdownCategories] = useState([]);
  
  const { createGroceryItem, deleteGroceryItem, updateGroceryItem, allGroceryItems } = useGroceries()
  const { setCurrentNotification } = useNotification()
  const { allCategories, createNewCategory } = useCategories()
  const { currentId, setCurrentId } = useForm()
  
  // FIX: Hard-coded search for 'name' key
  const currentItem = allGroceryItems.find((item) => item.name === currentId)

  useEffect(() => {
    return () => {
      setShowExitPrompt(false)
    }
  }, [setShowExitPrompt])

  useEffect(() => {
    // Map the categories to option elements
    let categoryOptions = allCategories.map((category) => {
      return <option value={category}>{toTitleCase(category)}</option>;
    });

    // Save the list to state
    if (currentItem) {
      setDropdownCategories(categoryOptions);
    } else {
      setDropdownCategories((prevCategories) => [
        <option label="None" value="" />,
        ...categoryOptions,
      ]);
    }
    return
  }, [allCategories]);

  const clearForm = () => {
    setCurrentId(null)
    setThisGrocery(schema);
  };

  useEffect(() => {
    // Populate the form if the user selected an item
    if (currentId && currentItem) {
      // Translate the purchase price decimal data for the form to read
      let validCurrentItem = {
        ...currentItem,
        image: currentItem.image || schema.image,
      };

      setThisGrocery(validCurrentItem);
    }
  }, [currentId, currentItem]);

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
      const formItemStr = JSON.stringify(thisGrocery) 
      const currentItemStr = JSON.stringify(currentItem) 
      if (formItemStr !== currentItemStr && thisGrocery.name === currentItem.name) {
        updateGroceryItem(thisGrocery, currentItem.name)
      } else {

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
      // Get rid of dashes in the name
      thisGrocery.name = thisGrocery.name.replace(/-/gi, " ")
      createGroceryItem(thisGrocery)
      history.push("/");
      clearForm();
    } else {
      const submitMessage = {
        name: "Empty Fields",
        message: `please complete the form`,
      }
      setCurrentNotification(submitMessage)
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

    if (typeof newCategory === "string" && newCategory.length) {
      createNewCategory(newCategory.toLowerCase())
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
            {currentId ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withAuthRedirect(FormPage)
