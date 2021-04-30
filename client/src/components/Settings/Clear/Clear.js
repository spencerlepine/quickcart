import React from "react"
import { clearGroceries } from "../../../actions/groceries"
import { useDispatch, useSelector } from "react-redux"
import useStyles from "./styles"

const Clear = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const authKey = useSelector((state) => state.authentication)

  const clearData = () => {
    if (window.confirm("Delete EVERYTHING?")) {
      dispatch(clearGroceries(authKey))
      window.alert("Database now empty")
    }
  }

  return (
    <div>
      <button className={classes.clearButton} onClick={clearData}>Clear Data</button>
    </div>
  )
}

export default Clear
