import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getGroceries } from "../../actions/groceries"
import FoodItem from "./FoodItem/FoodItem"
import useStyles from "./styles"

const Overview = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getGroceries())
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)
    const tableItems = groceries.map(item => <FoodItem groceryItem={item} />)

    return (
        <div>
            <table className={classes.table}>
                <tbody>
                    <tr>
                        <td></td>
                        <td className={classes.columnTitle}>Name</td>
                        <td className={classes.columnTitle}>Purchase Price</td>
                        <td className={classes.columnTitle}>Purchase Size</td>
                        <td className={classes.columnTitle}>Serving</td>
                        <td className={classes.columnTitle}>Servings Per</td>
                        <td></td>
                        <td></td>
                    </tr>
                    {tableItems}
                </tbody>
            </table>
        </div>
    )
}

export default Overview
