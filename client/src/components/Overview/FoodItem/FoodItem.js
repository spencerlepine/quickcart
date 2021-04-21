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

    let expectedKeys = [
        "_id",
        "name",
        "purchase_price",
        "purchase_size",
        "serving_cost",
        "category",
        "last_purchased",
        "priority",
    ]
    let completeItem = Object.keys(groceryItem).filter(key => expectedKeys.includes(key))
    
    return (
        <>
        {(searchMatch(currentSearch, groceryItem.name) || currentSearch.length < 3)
            &&
        <RowComponent style={{backgroundColor: completeItem.length >= 8 ? "#00000000" : "#ffbbbb"}}>
            <CellComponent align="center" className={classes.tableBox}><button onClick={() => dispatch(addToCart(groceryItem))} className={classes.addButton}>🛒Add</button></CellComponent>
            <CellComponent className={classes.tableBox}>{groceryItem.name}</CellComponent> 
            <CellComponent className={classes.tableBox} style={{color: "gray"}}>{groceryItem.serving_cost ? parseFloat(groceryItem.serving_cost["$numberDecimal"]).toLocaleString('en-US', {style: 'currency', currency: 'USD'}) : 0}</CellComponent>
            <CellComponent align="center" className={classes.tableBox}><button onClick={handleEdit} className={classes.editButton}>🏷️Edit</button></CellComponent>
            <CellComponent align="center" className={classes.tableBox}><button onClick={() => { if (window.confirm("Delete permanently?")) { dispatch(deleteGrocery(groceryItem._id))}}} className={classes.deleteButton}>🗑️Delete</button></CellComponent>
        </RowComponent>}
        </>
    )
}

export default FoodItem
