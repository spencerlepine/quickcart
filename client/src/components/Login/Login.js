import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useStyles from "./styles.js"
import { getGroceries } from "../../actions/groceries.js"
import { fetchCart } from "../../actions/cart.js"
import { fetchRecommended } from "../../actions/recommended"
import CircularProgress from "@material-ui/core/CircularProgress"

const Login = () => {
  const [keyFormValue, setKeyFormValue] = useState("")
  const dispatch = useDispatch()
  const classes = useStyles()

  const connection = useSelector((state) => state.connection.groceries)

  useEffect(() => {
    const savedKey = localStorage.getItem("groceryAuthKey")

    if (savedKey) {
      handleSubmit(savedKey)
    }
  }, [])

  const handleChange = (e) => {
    const { value: key } = e.target
    setKeyFormValue(key)
  }

  // Pass the key to submit
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = (savedKey = null) => {
    const usableKey = savedKey || keyFormValue
    dispatch(getGroceries(usableKey))
    dispatch(fetchCart(usableKey))
    dispatch(fetchRecommended(usableKey))
  }

  return (
    <div className={classes.loginPrompt}>
      {connection === "pending" ? (
        <CircularProgress />
      ) : (
        <>
          <p className={classes.passwordLabel}>Password:</p>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={keyFormValue}
            placeholder="demo123"
          ></input>
          <button
            onClick={() => handleSubmit()}
            className={classes.loginButton}
          >
            Login
          </button>
        </>
      )}
    </div>
  )
}

export default Login
