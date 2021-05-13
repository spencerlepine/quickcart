import React from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../../actions/auth.js"

import useStyles from "./styles"

const Logout = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLougout = async () => {
    try { 
      await dispatch(logoutUser())
      history.push("/")
    } catch {
      console.log("logout failed");
    }
  }

  return (
    <div className={classes.logoutDiv}>
      <button className={classes.logoutButton} onClick={handleLougout}>Logout</button>
    </div>
  )
}

export default Logout
