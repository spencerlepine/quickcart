import React from "react"
import { useSelector } from "react-redux"
import useStyles from "./styles"

const ShowPassword = () => {
  const classes = useStyles()
  const authKey = useSelector((state) => state.authentication)
  
  const handleClick = () => {
    alert("Saved password: " + authKey)
  }

  return (
    <div>
      <button className={classes.passwordButton} onClick={handleClick}>Show Password</button>
    </div>
  )
}

export default ShowPassword
