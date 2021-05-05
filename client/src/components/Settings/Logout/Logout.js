import React from "react"
import { setAuthKey } from "../../../actions/authentication"
import { useDispatch } from "react-redux"
import useStyles from "./styles"

const Clear = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleLougout = () => {
    localStorage.setItem("groceryAuthKey", "")
    dispatch(setAuthKey(null))
  }

  return (
    <div>
      <button className={classes.logoutButton} onClick={handleLougout}>Logout</button>
    </div>
  )
}

export default Clear
