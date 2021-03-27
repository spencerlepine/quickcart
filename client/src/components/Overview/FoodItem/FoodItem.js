import React from "react"
import { setId } from "../../../actions/selectedItem"
import { deleteGrocery } from "../../../actions/groceries"
import { addToCart } from "../../../actions/cart"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import searchMatch from "./searchMatch"
import useStyles from "./styles"

const FoodItem = ({ groceryItem, CellComponent, RowComponent }) => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const currentSearch = useSelector(state => state.search)

    const handleEdit = () => {
        dispatch(setId(groceryItem._id))
        history.push("/form")
    }

    return (
        <>
        {(searchMatch(currentSearch, groceryItem.name) || currentSearch.length < 3)
            &&
        <RowComponent>
            <CellComponent align="center" className={classes.tableBox}><button onClick={() => dispatch(addToCart(groceryItem))} className={classes.addButton}>🛒Add</button></CellComponent>
            <CellComponent className={classes.tableBox}>{groceryItem.name}</CellComponent>
            <CellComponent className={classes.tableBox}>{parseFloat(groceryItem.purchase_price["$numberDecimal"]).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</CellComponent>
            <CellComponent className={classes.tableBox} style={{color: "gray"}}>{groceryItem.purchase_size}</CellComponent>
            <CellComponent className={classes.tableBox} style={{color: "gray"}}>{groceryItem.serving}</CellComponent>
            <CellComponent className={classes.tableBox} style={{color: "gray"}}>{groceryItem.servings_per}</CellComponent>
            <CellComponent align="center" className={classes.tableBox}><button onClick={handleEdit} className={classes.editButton}>🏷️Edit</button></CellComponent>
            <CellComponent align="center" className={classes.tableBox}><button onClick={() => { if (window.confirm("Delete permanently?")) { dispatch(deleteGrocery(groceryItem._id))}}} className={classes.deleteButton}>🗑️Delete</button></CellComponent>
        </RowComponent>}
        </>
    )
}

export default FoodItem
