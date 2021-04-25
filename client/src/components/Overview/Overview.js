import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery } from "../../actions/search"
import useStyles from "./styles"

import FoodGrid from "./FoodGrid/FoodGrid"

const Overview  = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)

  useEffect(() => {
    if (authKey) {
      localStorage.setItem('groceryAuthKey', authKey)
    }
  }, [authKey])

  useEffect(() => {
    dispatch(setSearchQuery(""))
  }, [])

  return (
    <FoodGrid />
  )
}

export default Overview
