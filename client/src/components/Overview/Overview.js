import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getGroceries } from "../../actions/groceries"
import FoodItem from "./FoodItem/FoodItem"
import useStyles from "./styles"
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

const Overview = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getGroceries())
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)
    const tableItems = groceries.map((item, i) => <FoodItem key={i} groceryItem={item} CellComponent={TableCell} RowComponent={TableRow} />)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Purchase Price</TableCell>
                        <TableCell>Purchase Size</TableCell>
                        <TableCell>Serving</TableCell>
                        <TableCell>Servings Per</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableItems}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Overview
