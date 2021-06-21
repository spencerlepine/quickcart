import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useNotification from "../../context/NotificationContext/NotificationContext.js";
import useGroceries from "../../context/GroceriesContext/GroceriesContext.js";
import useForm from "../../context/FormContext/FormContext.js";
import schema from "../../schema/groceryItem"
import formatGroceryObj from "../../modules/formatGroceryObj"

const FormLogic = ({ Component }) => {
  const history = useHistory();
  const [thisGrocery, setThisGrocery] = useState({ ...schema });
  const [disableAdd, setDisableAdd] = useState(true);

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
  }, [editSelection, searchSelection]);

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
    setDisableAdd(false)
    const { name, value } = event.target;
    caclulateServingQuantity(name, value);
    matchUnitSize(name, value);

    setThisGrocery((prevItems) => ({ ...prevItems, [name]: value }));
  };

  const handleDelete = (idToDelete) => {
    if (window.confirm("Delete permanently?")) {
      deleteGroceryItem(idToDelete);
      setEditSelection(null);
      history.push("/");
    }
  };

  const handleSubmit = (event) => {
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

  const handleClear = () => {
    if (editSelection) {
      handleDelete(editSelection._id)
    } else {
      clearForm()
    }
  }

  const valueProps = {
    thisGrocery,
    setThisGrocery,
    disableAdd,
    setDisableAdd,
    createGroceryItem,
    deleteGroceryItem,
    updateGroceryItem,
    setCurrentNotification,
    setEditSelection,
    editSelection,
    searchSelection,
    setSearchSelection,
    showPopup,
    setShowPopup,
    clearForm,
    caclulateServingQuantity,
    matchUnitSize,
    handleChange,
    handleSubmit,
    handleDelete,
    handleClear,
  }

  return (<><Component {...valueProps} /></>)
};

export default FormLogic