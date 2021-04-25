import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import useStyles from "./styles.js"
import { getGroceries } from "../../actions/groceries.js"
import CircularProgress from "@material-ui/core/CircularProgress"

const Login = () => {
  const [keyFormValue, setKeyFormValue] = useState("")
  const [pendingLogin, setPendingLogin] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    const savedKey = localStorage.getItem('groceryAuthKey')

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
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = (savedKey=null) => {
    const usableKey = savedKey || keyFormValue
    if (!savedKey) {
      setPendingLogin(true)
    }
    dispatch(getGroceries(usableKey))
    setTimeout(() => {
      setPendingLogin(false)
      setKeyFormValue("")
    }, 1000)
  }

  return (
    <div className={classes.loginPrompt}>
      {pendingLogin
        ?
      <CircularProgress />
        :
      <>
        <input 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={keyFormValue}
        placeholder="demo123">
        </input>
        <button
          onClick={() => handleSubmit()}
          className={classes.loginButton}
        >Login</button>
      </>}
    </div>
  )
}

export default Login
