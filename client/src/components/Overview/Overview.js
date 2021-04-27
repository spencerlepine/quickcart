import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery } from "../../actions/search"
import { fetchCart } from "../../actions/cart"
import useStyles from "./styles"

import FoodGrid from "./FoodGrid/FoodGrid"

const Overview  = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)

  useEffect(() => {
    if (authKey) {
      if (localStorage.getItem('groceryAuthKey') !== authKey) {
        alert("Saving the authKey to storage!")
        localStorage.setItem('groceryAuthKey', authKey)
      }
      
      return
    }
  }, [authKey])

  useEffect(() => {
    dispatch(fetchCart(authKey))
    dispatch(setSearchQuery(""))
  }, [])

  return (
    <FoodGrid />
  )
}

export default Overview
