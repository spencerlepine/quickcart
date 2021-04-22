import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { setSearchQuery } from "../../actions/search"
import { getGroceries } from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import FoodCard from "./FoodCard/FoodCard"
import useStyles from "./styles"
import CircularProgress from '@material-ui/core/CircularProgress';

const Overview = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getGroceries())
        dispatch(setId(null))
        dispatch(setSearchQuery(""))
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)
    const foodItems = groceries ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />) : []

    return (
        <>{foodItems.length
            ?
        <div class={classes.itemsGrid}>
            {foodItems}
        </div>
            :
        <div className={classes.warning}>
            {groceries.length === 0 && <CircularProgress />}
        </div>
        }</>
    )
}

export default Overview
