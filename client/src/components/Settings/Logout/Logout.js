import React from "react"
import { setAuthKey } from "../../../actions/authentication"
import { useDispatch } from "react-redux"

const Clear = () => {
  const dispatch = useDispatch()
  const handleLougout = () => {
    localStorage.setItem("groceryAuthKey", null)
    dispatch(setAuthKey(null))
  }

  return (
    <div>
      <button onClick={handleLougout}>Logout</button>
    </div>
  )
}

export default Clear
