import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { getGroceries } from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import FoodCard from "./FoodCard/FoodCard"
import useStyles from "./styles"
import { Paper } from '@material-ui/core';

const Overview = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getGroceries())
        dispatch(setId(null))
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)
    const foodItems = groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
    
    return (
        <>{foodItems.length
            ?
        <div class={classes.itemsGrid}>
            {foodItems}
        </div>
            :
        <Paper square className={classes.warning}>
            <h2 className={classes.warningText}>No items saved</h2>
            <Link to="form"><h3 className={classes.warningText}>NEW ITEM</h3></Link>
        </Paper>
        }</>
    )
}

export default Overview
