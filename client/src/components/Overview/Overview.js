import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSearchQuery } from "../../actions/search"
import { setSelectedCategory } from "../../actions/selectedCategory"

import { fetchCart } from "../../actions/cart"
import useStyles from "./styles"

import FoodGrid from "./FoodGrid/FoodGrid"
import ReccomendedGrid from "./ReccomendedGrid/ReccomendedGrid"
import Categories from "./Categories/Categories"
import { fetchReccomended } from "../../actions/reccomended"

const Overview  = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)

  useEffect(() => {
    if (authKey) {
      if (localStorage.getItem('groceryAuthKey') !== authKey) {
        localStorage.setItem('groceryAuthKey', authKey)
      }
      
      return
    }
  }, [authKey])

  useEffect(() => {
    dispatch(fetchCart(authKey))
    dispatch(fetchReccomended(authKey))
    dispatch(setSearchQuery(""))
    dispatch(setSelectedCategory(null))
    return
  }, [])

  return (
    <>{
      authKey && 
      <>
        <Categories />
        <FoodGrid />
       </>
    }</>
  )
}

export default Overview
