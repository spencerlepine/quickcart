import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import AccountForm from 'components/AccountForm/AccountForm';
import { SIGNUP } from 'config/constants/routeConstants';
import useAuth from 'context/AuthContext/AuthContext';
import useStyles from './styles.js';

const LoginPage = () => {
  const classes = useStyles();
  const { loginUser } = useAuth();

  const handleLogin = formEntries => {
    loginUser(formEntries['email'], formEntries['password']);
  };

  const loginFields = [
    {
      name: 'email',
      placeholder: 'Email',
    },
    {
      name: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <div className={`login-container ${classes.loginContainer}`}>
      <AccountForm
        SubmitLabel="Log in"
        FormTitle="Log In"
        FormFields={loginFields}
        WrongFormLabel={'Don\'t have an account?'}
        CorrectionFormName={'Sign Up'}
        CorrectionFormLink={SIGNUP}
        handleSubmit={handleLogin}
      />
    </div>
  );
};

const isAuthPage = true;
export default withAuthRedirect(LoginPage, isAuthPage);
