import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useExitPrompt from '../../hooks/useExitPrompt/useExitPrompt.js'
import useNotification from "../../context/NotificationContext/NotificationContext.js";
import useGroceries from "../../context/GroceriesContext/GroceriesContext.js";
import useStyles from "./styles.js";
import useForm from "../../context/FormContext/FormContext.js";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import schema from "../../schema/groceryItem"
import ClearButton from "./ClearButton/ClearButton"
import formatGroceryObj from "../../modules/formatGroceryObj"
import ProductName from "./ProductSpecifications/ProductName/ProductName"
import ProductFields from "./ProductSpecifications/ProductFields/ProductFields"
import ProductRating from "./ProductSpecifications/ProductRating/ProductRating"
import ProductImageSearch from "./ProductImageSearch/ProductImageSearch"
import PurchasePrice from "./ProductSpecifications/PurchasePrice/PurchasePrice"
import ProductCategory from "./ProductSpecifications/ProductCategory/ProductCategory"
import ServingCount from "./ProductSpecifications/ServingCount/ServingCount"
import FindProductPrompt from "./FindProductPrompt/FindProductPrompt"
import DatePurchased from "./ProductSpecifications/DatePurchased/DatePurchased"
import SubmitButton from "./SubmitButton/SubmitButton"

const FormPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [thisGrocery, setThisGrocery] = useState({ ...schema });

  const [, setShowExitPrompt] = useExitPrompt(false);
  const [disableAdd, setDisableAdd] = useState(false);

  const { createGroceryItem, deleteGroceryItem, updateGroceryItem } = useGroceries()
  const { setCurrentNotification } = useNotification()
  const { setEditSelection, editSelection, searchSelection, setSearchSelection } = useForm()

  const [showPopup, setShowPopup] = useState(false);

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
      const servingCost = parseFloat(currentGrocery["purchase_price"]) / (parseFloat(currentGrocery["serving_quantity"]) || 1)
      console.log(servingCost, typeof servingCost)
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

  const handleClear = (handleDelete, clearForm, editSelection) => {
    if (editSelection) {
      handleDelete(editSelection._id)
    } else {
      clearForm()
    }
  }

  return (
    <div className={classes.formContainer}>
      <FindProductPrompt showPopup={showPopup} setShowPopup={setShowPopup} />

      <ProductImageSearch
        updateImageState={(newImg) => handleChange({ target: { name: "image", value: newImg } })}
        currentImage={thisGrocery.image}>
      </ProductImageSearch>

      <form className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          <ProductName
            value={thisGrocery["name"]}
            name={"name"}
            handleChange={handleChange}
            thisClass={classes.itemName}>
          </ProductName>

          <ProductCategory
            setCurrentNotification={setCurrentNotification}
            handleChange={handleChange}
            thisGrocery={thisGrocery}
            setThisGrocery={setThisGrocery}>
          </ProductCategory>

          <ProductRating rating={parseInt(thisGrocery.priority)} handleChange={handleChange} />

          <ClearButton
            handleClick={() => handleClear(handleDelete, clearForm, editSelection)}
            editSelection={editSelection}>
          </ClearButton>

          <SubmitButton handleSubmit={handleSubmit}
            searchSelection={searchSelection}
            disableAdd={disableAdd}>
          </SubmitButton>

          <hr /><hr />

          <div className={classes.importantFields}>
            <PurchasePrice handleChange={handleChange} thisGrocery={thisGrocery} />
            <ServingCount handleChange={handleChange} thisGrocery={thisGrocery} />
          </div>
        </div>

        <ProductFields thisGrocery={thisGrocery} handleChange={handleChange} />
        <DatePurchased thisGrocery={thisGrocery} handleChange={handleChange} />
      </form>
    </div>
  );
};

export default withAuthRedirect(FormPage)
