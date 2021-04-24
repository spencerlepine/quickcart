import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery } from "../../actions/search"
import { getGroceries } from "../../actions/groceries"
import { setAuthKey } from "../../actions/authentication"
import { setId } from "../../actions/selectedItem"
import FoodCard from "../FoodCard/FoodCard"
import useStyles from "./styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import Login from "../Login/Login"

const Overview = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)
  const groceries = useSelector((state) => state.groceries)
  const foodItems =
    groceries && groceries[0] !== undefined
      ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
      : []

  useEffect(() => {
    if (JSON.stringify(groceries) === "[]" && authKey) {
      setTimeout(() => {
        // Go back to login page if it couldn't load
        localStorage.setItem('groceryAuthKey', null)
        dispatch(setAuthKey(null))
      }, 2000)
    } else {
      return
    }
  }, [authKey])

  useEffect(() => {
    if (authKey && typeof authKey === "string" && authKey.length === 10) {
      dispatch(getGroceries(authKey))
    }
    dispatch(setId(null))
    dispatch(setSearchQuery(""))
  }, [dispatch, authKey])

  return (
    <>
      {(authKey !== null && authKey.length === 10) ? (
        <>
            {foodItems.length ? (
            <div className={classes.itemsGrid}>{foodItems}</div>
            ) : (
            <div className={classes.warning}>
                <CircularProgress />
            </div>
            )}
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Overview
