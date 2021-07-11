import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SIGNUP } from '../../constants/routeConstants';
import useAuth from '../../context/AuthContext/AuthContext';
import useNotification from '../../context/NotificationContext/NotificationContext';
import useGroceries from '../../context/GroceriesContext/GroceriesContext';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import QuickCartLogo from '../../images/QuickCart-Logo.png';
import useStyles from './styles';

function LogInPage() {
  const classes = useStyles();
  const history = useHistory();
  const { loginUser } = useAuth();
  const { setCurrentNotification } = useNotification();
  const { fetchTotalGroceryCount } = useGroceries();

  const [formValues, setFormValue] = useState({
    email: 'demo123@gmail.com',
    password: 'password123'
  });

  function validateForm() {
    const { email, password } = formValues;
    return email.length > 1 && password.length > 7;
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await loginUser(formValues['email'], formValues['password']);
        fetchTotalGroceryCount();
        history.push('/');
      } catch {
        setCurrentNotification('Invalid credentials', 'Please try again', 'danger')
      }
    }
  };

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setFormValue((prevFormValues) => ({ ...prevFormValues, [key]: value }));
  };

  // Pass the key to submit
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={classes.loginPrompt}>
      <img src={QuickCartLogo} alt='QuickCart Logo' className={classes.logoImg}></img>
      <h2>Log in</h2>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name='email'
        type='email'
        value={formValues['email']}
        placeholder='demo123@gmail.com'
      ></input>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name='password'
        type='password'
        value={formValues['password']}
        placeholder='password123'
      ></input>
      <button onClick={() => handleSubmit()} className={classes.loginButton}>
        Log in
      </button>
      <hr />
      <p className={classes.accountMessage}>Don’t have an account?</p>
      <div className={classes.accountRedirect}>
        <Link to={SIGNUP}>Sign Up</Link>
      </div>
    </div>
  );
}

const isAuthPage = true;
export default withAuthRedirect(LogInPage, isAuthPage);