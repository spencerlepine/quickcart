import React from "react"
import { useHistory } from "react-router-dom";
import useAuth from "../../context/AuthContext/AuthContext"

import useStyles from "./styles"

const Logout = () => {
  const classes = useStyles()
  const history = useHistory()
  const { logoutUser } = useAuth()

  const handleLougout = async () => {
    try { 
      logoutUser()
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
