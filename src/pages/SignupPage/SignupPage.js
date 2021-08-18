import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import AccountForm from "components/AccountForm/AccountForm";
import { LOGIN } from "config/constants/routeConstants";
import useStyles from "./styles.js";

const SignupPage = () => {
  const classes = useStyles();

  const handleSignup = (formEntries) => {
    console.log("HERE, sign up the user", formEntries);
  };

  const signupFields = [
    {
      name: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className={`signup-container ${classes.signupContainer}`}>
      <AccountForm
        SubmitLabel="Sign Up"
        FormTitle="Sign Up"
        FormFields={signupFields}
        WrongFormLabel={"Don't have an account?"}
        CorrectionFormName={"Sign Up"}
        CorrectionFormLink={LOGIN}
        handleSubmit={handleSignup}
      />
    </div>
  );
};

const isAuthPage = true;
export default withAuthRedirect(SignupPage, isAuthPage);
