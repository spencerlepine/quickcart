import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import {
  createGrocery,
  deleteGrocery,
  updateGrocery,
} from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import useStyles from "./styles.js"
import FileBase from "react-file-base64"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import Rating from "@material-ui/lab/Rating"
import StarBorderIcon from "@material-ui/icons/StarBorder"

const todaysDate = new Date().toISOString().slice(0, 10)

const schema = {
  name: "",
  purchase_price: "",
  purchase_size: "",
  serving_cost: "",
  category: "",
  last_purchased: todaysDate,
  priority: "0",
  image: "",
}

const Form = () => {
  const [thisGrocery, setThisGrocery] = useState(schema)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)
  const currentId = useSelector((state) => state.selectedItem)
  const currentItem = useSelector((state) =>
    currentId ? state.groceries.find((item) => item._id === currentId) : null
  )

  const clearForm = () => {
    dispatch(setId(null))
    setThisGrocery(schema)
  }

  useEffect(() => {
    // Populate the form if the user selected an item
    if (currentId && currentItem) {
      // Translate the purchase price decimal data for the form to read
      let validCurrentItem = {
        ...currentItem,
        purchase_price: parseFloat(
          currentItem["purchase_price"]
        ).toFixed(2),
        serving_cost: currentItem["serving_cost"]
          ? parseFloat(currentItem["serving_cost"]).toFixed(2)
          : 0,
        image: currentItem.image || schema.image,
      }

      setThisGrocery(validCurrentItem)
    }
  }, [currentId, currentItem])

  const handleChange = (event) => {
    const { name, value } = event.target

    setThisGrocery((prevItems) => ({ ...prevItems, [name]: value }))
  }

  const handleDelete = () => {
    if (window.confirm("Delete permanently?")) {
      dispatch(deleteGrocery(currentId))
      history.push("/")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (currentId) {
      dispatch(updateGrocery(authKey, currentId, thisGrocery))
      history.push("/")
      clearForm()
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
      dispatch(createGrocery(authKey, thisGrocery))
      history.push("/")
      clearForm()
    } else {
      alert("Please enter valid data")
    }
  }

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
  )

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
                    handleChange({ target: { name: "image", value: base64 } })
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
              <option label="None" value="" />
              <option value={"bread"}>Bread</option>
              <option value={"grains"}>Grains</option>
              <option value={"dairy"}>Dairy</option>
              <option value={"breakfast"}>Breakfast</option>
              <option value={"fruits"}>Fruits</option>
              <option value={"vegetables"}>Vegetables</option>
              <option value={"meat"}>Meat</option>
              <option value={"snacks"}>Snacks</option>
              <option value={"pantry"}>Pantry</option>
            </Select>
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {currentId ? "Update" : "Submit"}
          </Button>

          {currentId && (
            <Button
              onClick={handleDelete}
              color="secondary"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Delete
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
