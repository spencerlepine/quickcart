import React from "react"
import { setId } from "../../../actions/selectedItem"
import { deleteGrocery } from "../../../actions/groceries"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import useStyles from "./styles"

const FoodItem = ({ groceryItem }) => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(setId(groceryItem._id))
        history.push("/form")
    }

    return (
        <tr>
            <td className={classes.tdButton}>🛒Add</td>
            <td className={classes.tableBox}>{groceryItem.name}</td>
            <td className={classes.tableBox}>{parseInt(groceryItem.purchase_price["$numberDecimal"]).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
            <td className={classes.tableBox}>{groceryItem.purchase_size}</td>
            <td className={classes.tableBox}>{groceryItem.serving}</td>
            <td className={classes.tableBox}>{groceryItem.servings_per}</td>
            <td onClick={handleEdit} className={classes.tdButton}>🏷️Edit</td>
            <td onClick={() => dispatch(deleteGrocery(groceryItem._id))} className={classes.tdButton}>🗑️Delete</td>
        </tr>
    )
}

export default FoodItem
