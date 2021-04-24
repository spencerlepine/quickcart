import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import useStyles from "./styles.js"
import { setAuthKey } from "../../actions/authentication"

const Login = () => {
  const [keyFormValue, setKeyFormValue] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()

  useEffect(() => {
    const savedKey = localStorage.getItem('groceryAuthKey')

    if (savedKey) {
      handleSubmit(savedKey)
      history.push('/')
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
    if (typeof usableKey === "string" && usableKey.length > 9) {
      localStorage.setItem('groceryAuthKey', usableKey)
      dispatch(setAuthKey(usableKey))
    }
  }

  return (
    <div className={classes.loginPrompt}>
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
    </div>
  )
}

export default Login
