import React from "react";
import { Link } from "react-router-dom"
import { LOGIN, SIGNUP } from "../../constants/routeConstants"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"

function UserWelcome() {
  return (
    <div>
        <h3>Welcome!</h3>
        <p>Connect your account to get started</p>
        <Link to={LOGIN}>
           Log in
         </Link>
         <Link to={SIGNUP}>
           Sign up
         </Link>
    </div>
  );
}

const isAuthPage = true
export default withAuthRedirect(UserWelcome, isAuthPage);
