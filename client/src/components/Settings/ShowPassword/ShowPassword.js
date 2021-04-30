import React from "react"
import { useSelector } from "react-redux"

const ShowPassword = () => {
  const authKey = useSelector((state) => state.authentication)
  
  const handleClick = () => {
    alert("Saved password: " + authKey)
  }

  return (
    <div>
      <button onClick={handleClick}>Show Password</button>
    </div>
  )
}

export default ShowPassword
