import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery } from "../../actions/search"
import { getGroceries } from "../../actions/groceries"
import { setAuthKey } from "../../actions/authentication"
import useStyles from "./styles"

import FoodGrid from "./FoodGrid/FoodGrid"
import Login from "../Login/Login"

const Overview  = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)
  const groceries = useSelector((state) => state.groceries)

  useEffect(() => {
    if (authKey) {
      localStorage.setItem('groceryAuthKey', authKey)
    }
  }, [authKey])

  useEffect(() => {
    dispatch(setSearchQuery(""))
  }, [])

  return (
    <>
      {(authKey !== null && authKey.length === 10) ? (
        <FoodGrid />
      ) : (
        <Login />
      )}
    </>
  )
}

export default Overview
