import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import { getGroceries } from "../../actions/groceries.js";
import { setSearchQuery } from "../../actions/search.js";
import { setSelectedCategory } from "../../actions/selectedCategory.js";
import { fetchCart } from "../../actions/cart.js";
import { fetchRecommended } from "../../actions/recommended";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchCategories } from "../../actions/categories.js";

import { loginUser, isLoggedIn } from "../../actions/userAccount.js";

const Login = () => {
  const [formValues, setFormValue] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const classes = useStyles();

  const connection = useSelector((state) => state.connection.groceries);

  useEffect(() => {
    const savedKey = localStorage.getItem("groceryAuthKey");

    if (savedKey) {
      handleSubmit(savedKey);
    }
  }, []);

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

  const handleSubmit = () => {
    const loginObj = {
      email: formValues["email"],
      password: formValues["password"],
      passwordVerify: formValues["password"],
    }
    dispatch(
      loginUser(loginObj)
    );

    // dispatch(fetchCategories())
    // dispatch(getGroceries())
    // dispatch(setSearchQuery(""))
    // dispatch(setSelectedCategory(null))
    // dispatch(fetchRecommended())
  };

  return (
    <div className={classes.loginPrompt}>
      {connection === "pending" ? (
        <CircularProgress />
      ) : (
        <>
          <p className={classes.inputLabel}>Email:</p>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            name="email"
            value={formValues["email"]}
            placeholder="demo123@gmail.com"
          ></input>
          <p className={classes.inputLabel}>Password:</p>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            name="password"
            value={formValues["password"]}
            placeholder="password123"
          ></input>
          <button
            onClick={() => handleSubmit()}
            className={classes.loginButton}
          >
            Login
          </button>
          <hr />
          <Link to="/register">Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default Login;
