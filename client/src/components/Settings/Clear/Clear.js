import React from "react"
import { clearGroceries } from "../../../actions/groceries"
import { useDispatch, useSelector } from "react-redux"

const Clear = () => {
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
      <button onClick={clearData}>Clear Data</button>
    </div>
  )
}

export default Clear
