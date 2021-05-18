import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles.js"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, isLoggedIn } from "../../actions/userAccount.js"

const Login = () => {
  const [formValues, setFormValue] = useState({
    email: "demo123@gmail.com",
    password: "password123"
  });
  
  const history = useHistory();
  const dispatch = useDispatch()
  const classes = useStyles();

  // Sign in user if cookies are valid
  useEffect(() => {
    dispatch(isLoggedIn())
  }, [])

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setFormValue((prevFormValues) => ({ ...prevFormValues, [key]: value }));
  };

  // Pass the key to submit
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      await dispatch(loginUser(formValues["email"], formValues["password"]))
      history.push("/");
    } catch {
      console.log("Login failed");
    }
  };

  return (
    <div className={classes.loginPrompt}>
      <h2>Log in</h2>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="email"
        type="email"
        value={formValues["email"]}
        placeholder="demo123@gmail.com"
      ></input>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="password"
        type="password"
        value={formValues["password"]}
        placeholder="password123"
      ></input>
      <button onClick={() => handleSubmit()} className={classes.loginButton}>
        Log in
      </button>
      <hr />
      <p className={classes.accountMessage}>Don’t have an account?</p>
      <div className={classes.accountRedirect}>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
