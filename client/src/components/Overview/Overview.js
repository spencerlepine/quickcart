import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getGroceries } from "../../actions/groceries"
import FoodItem from "./FoodItem/FoodItem"
import HomeButton from "../HomeButton/HomeButton"
import "./styles.css"

const Overview = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGroceries())
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)

    return (
        <div>
            <HomeButton />
            {groceries.map(item => <FoodItem groceryItem={item} />)}
        </div>
    )
}

export default Overview
