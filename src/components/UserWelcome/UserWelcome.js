import React from "react";
import { Link } from "react-router-dom"
import { LOGIN, SIGNUP } from "../../constants/routeConstants"
import demoImage from "../../images/demo.png"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles"

function UserWelcome() {
  const classes = useStyles()

  return (
    <div>
        <p className={classes.appDescription}>
          Organize and budget a personal grocery cart for easy shopping
        </p>
        <div className={classes.accountRedirect}>
          <Link to={SIGNUP} className={classes.accountLink}>
            Sign up
          </Link>
          <Link to={LOGIN} className={classes.loginLink}>Log in</Link>
        </div>

        <img className={classes.demoImg} src={demoImage} alt="App Screenshot"></img>
    </div>
  );
}

const isAuthPage = true
export default withAuthRedirect(UserWelcome, isAuthPage);
