import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import AccountForm from 'components/AccountForm/AccountForm';
import { LOGIN } from 'config/constants/routeConstants';
import useAuth from 'context/AuthContext/AuthContext';
import useStyles from './styles.js';

const SignupPage = () => {
  const classes = useStyles();
  const { signupUser } = useAuth();

  const handleSignup = formEntries => {
    signupUser(formEntries['name'], formEntries['email'], formEntries['password']);
  };

  const signupFields = [
    {
      name: 'name',
      placeholder: 'Name',
    },
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
    <div className={`signup-container ${classes.signupContainer}`}>
      <AccountForm
        SubmitLabel="Sign Up"
        FormTitle="Sign Up"
        FormFields={signupFields}
        WrongFormLabel={'Already have an account?'}
        CorrectionFormName={'Log In'}
        CorrectionFormLink={LOGIN}
        handleSubmit={handleSignup}
      />
    </div>
  );
};

const isAuthPage = true;
export default withAuthRedirect(SignupPage, isAuthPage);
