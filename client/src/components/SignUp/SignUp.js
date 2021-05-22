import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { signupUser, loginUser } from "../../actions/userAccount.js"
import QuickCartLogo from "../../images/QuickCart-Logo.png"
import useStyles from "./styles.js";

const SignUp = () => {
  const [formValues, setFormValue] = useState({ email: "", password: "" });
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles();

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
        await dispatch(signupUser(formValues["email"], formValues["password"]))
        await dispatch(loginUser(formValues["email"], formValues["password"]))
        history.push("/")
    } catch {
        console.log("sign up failed")
    }
  };

  return (
    <div className={classes.loginPrompt}>
      <img src={QuickCartLogo} alt="QuickCart Logo" className={classes.logoImg}></img>
      <h2>Sign Up</h2>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="email"
        type="email"
        value={formValues["email"]}
        placeholder="Email"
      ></input>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="password"
        name="password"
        value={formValues["password"]}
        placeholder="Password"
      ></input>
      <button onClick={() => handleSubmit()} className={classes.loginButton}>
        Continue
      </button>
      <hr />
      <p className={classes.accountMessage}>Already have an account?</p>
      <div className={classes.accountRedirect}>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default SignUp;