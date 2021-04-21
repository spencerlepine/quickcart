import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { createGrocery } from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import { updateGrocery } from "../../actions/groceries"
// import { makeStyles } from '@material-ui/core/styles'
import useStyles from "./styles.js"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Select from "@material-ui/core/Select"
import Rating from "@material-ui/lab/Rating"
import StarBorderIcon from '@material-ui/icons/StarBorder'

const schema = {
  name: "",
  purchase_price: "",
  purchase_size: "",
  serving_cost: "",
  category: "",
  last_purchased: "2021-04-20",
  priority: 0,
}

const Form = () => {
  const [itemData, setItemData] = useState(schema)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  const currentId = useSelector((state) => state.selectedItem)
  const currentItem = useSelector((state) =>
    currentId ? state.groceries.find((item) => item._id === currentId) : null
  )

  const clearForm = () => {
    dispatch(setId(null))
    setItemData(schema)
  }

  useEffect(() => {
    // Populate the form if the user selected an item
    if (currentId && currentItem) {
      // Translate the purchase price decimal data for the form to read
      let validCurrentItem = {
        ...currentItem,
        purchase_price: currentItem["purchase_price"]["$numberDecimal"],
        serving_cost: currentItem["serving_cost"] ? currentItem["serving_cost"]["$numberDecimal"] : 0,
      }

      setItemData(validCurrentItem)
    }
  }, [currentId, currentItem])

  const handleChange = (event) => {
    const { name, value } = event.target
    setItemData((prevItems) => ({ ...prevItems, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentId) {
      dispatch(updateGrocery(currentId, itemData))
      history.push("/")
      clearForm()
    } else if (
        itemData.name &&
        itemData.purchase_price &&
        itemData.purchase_size &&
        itemData.serving_cost &&
        itemData.category &&
        itemData.last_purchased &&
        itemData.priority
    ) {
      dispatch(createGrocery(itemData))
      history.push("/")
      clearForm()
    } else {
      alert("Please enter valid data")
    }
  }

  const Field = (name, placeholder) => (
    <TextField
      onChange={handleChange}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name={name}
      placeholder={placeholder || name}
      value={itemData[name]}
    />
  )

  return (
    <div className={classes.formDiv}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            {Field("name", "Eggs")}

            {Field("purchase_size", "Dozen")}

            <div>
                <label>Category</label>
                <br />
                <Select
                native
                value={itemData.category}
                onChange={handleChange}
                inputProps={{
                    name: "category",
                    id: "age-native-simple",
                }}
                >
                <option label="" value="" />
                <option value={"bread"}>Bread</option>
                <option value={"grains"}>Grains</option>
                <option value={"breakfast"}>Breakfast</option>
                <option value={"fruit"}>Fruit</option>
                <option value={"vegetable"}>Vegetable</option>
                <option value={"meat"}>Meat</option>
                <option value={"snacks"}>Snacks</option>
                <option value={"other"}>Other</option>
                </Select>
            </div>

            <div>
                <label>Priority</label>
                <br />
                <Rating
                name="priority"
                value={parseInt(itemData.priority)}
                precision={1}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Purchase Price:</label>
                {Field("purchase_price", "2.50")}
            </div>

            <div>
                <label>Serving Cost:</label>
                {Field("serving_cost", "1.49")}
            </div>
              
            <div>
                <TextField
                name="last_purchased"
                label="Last Purchased"
                type="date"
                value={itemData.last_purchased}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}
                />
            </div>
            <br />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>

            {Object.values(itemData).filter((val) => val).length > 1 && (
              <Button
                onClick={clearForm}
                color="secondary"
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Clear
              </Button>
            )}
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Form
