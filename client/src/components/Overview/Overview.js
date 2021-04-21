import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { getGroceries } from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import FoodItem from "./FoodItem/FoodItem"
import useStyles from "./styles"
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

const Overview = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getGroceries())
        dispatch(setId(null))
    }, [dispatch])

    const groceries = useSelector(state => state.groceries)
    const tableItems = groceries.map((item, i) => <FoodItem key={i} groceryItem={item} CellComponent={TableCell} RowComponent={TableRow} />)
    
    return (
        <>{tableItems.length
            ?
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Serving Cost</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableItems}
                </TableBody>
            </Table>
        </TableContainer>
            :
        <Paper square className={classes.warning}>
            <h2 className={classes.warningText}>No items saved</h2>
            <Link to="form"><h3 className={classes.warningText}>NEW ITEM</h3></Link>
        </Paper>
        }</>
    )
}

export default Overview
