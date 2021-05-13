import React from "react"
import { logoutUser } from "../../../actions/userAccount"
import { useDispatch } from "react-redux"
import useStyles from "./styles"

const Clear = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleLougout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className={classes.logoutDiv}>
      <button className={classes.logoutButton} onClick={handleLougout}>Logout</button>
    </div>
  )
}

export default Clear
