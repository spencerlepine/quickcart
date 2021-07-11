import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants/routeConstants';
import useAuth from '../../context/AuthContext/AuthContext';
import useNotification from '../../context/NotificationContext/NotificationContext';
import useGroceries from '../../context/GroceriesContext/GroceriesContext';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import QuickCartLogo from '../../images/QuickCart-Logo.png';
import useStyles from './styles';

function SignUpPage() {
  const classes = useStyles();
  const { signupUser } = useAuth();
  const { setCurrentNotification } = useNotification();
  const { fetchTotalGroceryCount } = useGroceries();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [passwordValidate, setPasswordValidate] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 7 && password === passwordValidate;
  }

  // Pass the key to submit
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  async function handleSubmit() {
    if (validateForm()) {
      try {
        await signupUser(displayName, email, password)
        // start loading the app
        fetchTotalGroceryCount();
      } catch {
        setCurrentNotification('Invalid email or password', 'Please try again', 'danger');
      }
    }
  }

  return (
    <div className={classes.loginPrompt}>
      <img src={QuickCartLogo} alt='QuickCart Logo' className={classes.logoImg}></img>
      <h2>Sign Up</h2>
      <input
        onChange={(e) => setDisplayName(e.target.value)}
        onKeyDown={handleKeyDown}
        type='name'
        name='displayName'
        value={displayName}
        placeholder='Name'
      ></input>
      <input
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        name='email'
        type='email'
        value={email}
        placeholder='Email'
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        type='password'
        name='password'
        value={password}
        placeholder='Password'
      ></input>
      <input
        onChange={(e) => setPasswordValidate(e.target.value)}
        onKeyDown={handleKeyDown}
        type='password'
        name='verifyPassword'
        value={passwordValidate}
        placeholder='Re-enter Password'
      ></input>
      <button onClick={() => handleSubmit()} className={classes.loginButton}>
        Continue
      </button>
      <hr />
      <p className={classes.accountMessage}>Already have an account?</p>
      <div className={classes.accountRedirect}>
        <Link to={LOGIN}>Log in</Link>
      </div>
    </div>
  );
}

const isAuthPage = true;
export default withAuthRedirect(SignUpPage, isAuthPage);