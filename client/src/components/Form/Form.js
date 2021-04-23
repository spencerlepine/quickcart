import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { createGrocery, deleteGrocery, updateGrocery } from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import useStyles from "./styles.js"
import FileBase from 'react-file-base64'

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
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
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCADFAMUDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAIDBAEFB//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAH7KAAAAAAAAAAAAAAAAQJ8yURvhiG1iHoz8uZ6LNoroAAAAABkJZeIAAAATgPQs8zaXCgAABApyd5AAAAAADvB6M8G+gAAGPX5scAAWWGdoGdoGdoGdKIA3YbzaKAAr8/bigADVGVBNSLlMyd+LUU12VgCUZHpOdoACjFtxQABqovrIc9AYtztZ46omGuyuAHedPRlztAAQ871POiAANWnz5m5hG5hG5hEa+8AFlek1igAGbTw8xOEAAAAAAAd9DNsAoAACvB6dMYXeAAAAACxuO9KAAAAAhj3jy26iKEhF0cWXGbRomc6UAAAAAAAA50R70AAAAAAAAAAAAAAAAAAAf/EACMQAAIBAwQDAQEBAAAAAAAAAAECAAMTIBEhMDISMUAQUCL/2gAIAQEAAQUC/t6wusuCXBLggYfEzARqhmuQYiLUg35nqcakiI/lyVH5qb68VVucbRG1GbnQfBTOhzrHf4aR1XE+j7wRfKWjLRloy0ZaMtGWjDscKJ/1jU640Izt5XGlxpcaXGlxpSYmP3wX3jW640I/f9Ck/lCP3wHtfWFb1jQj91BYsNCi+UG0qJrKEfvivXCt1xoQgtUUBQyhoNv3Td++A9j1g/XGhAM374J2yYaNgrFZcaXGlxpcaXGlxpcaHc4URnWHxINFyO4YaHnpLw1F8hzIvkRtxVE1h25FUtFGg42UNGQjiSnANOdqYMNMwgiaH80gUwUoqgfJoJ4rNB/e/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEp/8QAHxAAAgEEAwEBAAAAAAAAAAAAAAExESAhQBAwUGBh/9oACAEBAAY/AvgJ08XyZ76LYotii9Gm/KJRKJRKJRKKaLHkkkkkkdR6LHZjhjuXWx8UZ+cVQx3LrY+M2VHovoejjorbW+vlV+IzpxZnVghe/wD/xAAmEAEAAgAEBQUBAQAAAAAAAAABABEgITAxQVFhkaEQQHHB8FDx/9oACAEBAAE/If7aDdqC4+vF9Zxfsm4sVyEU7uLYo4MoFjrVRVXPSVyYA66lzqgo2SrTv7nkqyfN6Gbxbb9h8PoW9L2WScsSpPKK04VvSFaCIiIiGzkw0UxOni+uHAyDyn5E/In5E/In5Ezsup5uFUXUvrnm4C1G3r+bh2Pmbrppv1zzZSCLIdcuJgBQUTrviTfPm4TcnjYRwYvrggc5SCEVABQUeoRDjvPNw7EFAwm3i+uAXRvj83CbBiZcGGw5p1ztOudp1ztOudp1ztOudp1ztEot3DnY3B+xM2UxjBQx6vYXNttH5SJTTrJ0IAUaQZzeBVOox0g1GoZnvGeZohe0RzykAUa+xZMPtnN0J1Ep5S3Ji9iNxTZz2i247T/CgGwf3v/aAAwDAQACAAMAAAAQ888888888888888882Oee08888884+8888sS88888e8888888U888u88++++08+888W88uOOOU84088e886SccU8sc88a88++++c8u888s08888888O8888K888888m888888M+40yO888888888sc8888888888888888888//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8QKf/EABoRAAIDAQEAAAAAAAAAAAAAAAARATBAIFD/2gAIAQIBAT8QwsYx+DNs2zwqZ4Yx4I0Lf//EACoQAQABAgMHBAIDAAAAAAAAAAERADEgIfAwQVFhcYGhQJGxwRDRUOHx/9oACAEBAAE/EP5u1/U0imZLlvmprCdf6muWe7+qXkdWUeYofIZMK296ESRE9CPlTwKRgUSUjN+eGzJTkpRqBHOoYk2qgSsFSm4MLUySuylTRwrhTg2agSsBSoyBd1r62kyIaC1nzsocyHemtdtuJbMoCZIX2BPPOxTMrvoFNzlc1q1CIIyNseRHLTXT0WdHPE38wms4JzvF8O5kJmtY1rGtY1rGtY1rGtY0riKoYwpcw+xpjEsRhbPTP6xaHegaCAIVy/srl/ZXL+yuX9lcv7KV3IjIONedwizOWeXihknDmBwZ+D7xaHevI4HKpdz6fi7s+687hcO8FKeMD4w/H9mLQ715GjJ9XcUnCEtzK37D/AoaYLFZwOU3/wB18D7rzuHOXOvF/GFk82fSJ+sWh3oT9+XcUZPq71qAlrJcoSYLH5LyGPVXncLBGwi1ykAwx2UAlThv8TVsnDod6yMEpebj87hUyO/CziAiNmmQvO/DnyG9JOwUpSlKVdAJcMrRkWy7fvHOAddat6EIBdooCFzcbi00hZlu9Bk/ktrXnYhIW2pmCE2wEDmaMlAbIWOPnSk4TaGQE3mggxtEEI4qsbgJsUUBWlTpFARgNsgkJJQKipDdT1g1yoKYutIEo9q5j2pElI5kUnC2nie9Izg5a/dAFzi+jSb1cn1Ff4SrAuh/Pf/Z"
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
        purchase_price: parseFloat(currentItem["purchase_price"]["$numberDecimal"]).toFixed(2),
        serving_cost: currentItem["serving_cost"] ? parseFloat(currentItem["serving_cost"]["$numberDecimal"]).toFixed(2) : 0,
        image: currentItem.image || schema.image
      }

      setItemData(validCurrentItem)
    }
  }, [currentId, currentItem])

  const handleChange = (event) => {
    const { name, value } = event.target
    setItemData((prevItems) => ({ ...prevItems, [name]: value }))
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
        itemData.priority &&
        itemData.image
    ) {
      dispatch(createGrocery(itemData))
      history.push("/")
      clearForm()
    } else {
      alert("Please enter valid data")
    }
  }

  const Field = (name, placeholder, thisClass="") => (
    <TextField
      className={thisClass}
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
    <div className={classes.formContainer}>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>

        <div className={classes.imageContainer}>
          <img src={itemData.image} alt={itemData.name}></img>
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
              value={itemData.category}
              onChange={handleChange}
              inputProps={{
                  name: "category",
                  id: "age-native-simple",
              }}
              >
              <option label="None" value="" />
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
              value={parseInt(itemData.priority)}
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
              value={itemData.last_purchased}
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

          {currentId && <Button
              onClick={handleDelete}
              color="secondary"
              fullWidth
              variant="contained"
              className={classes.button}
            >
              Delete
            </Button>}
        </div>
      </form>
    </div>
  )
}

export default Form
