import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import useStyles from "./styles"

import FoodGrid from "./FoodGrid/FoodGrid"
import Categories from "./Categories/Categories"

const Overview  = () => {
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

  return (
    <>{
      authKey && 
      <>
        <Categories />
        <FoodGrid authentication={authKey} />
       </>
    }</>
  )
}

export default Overview
