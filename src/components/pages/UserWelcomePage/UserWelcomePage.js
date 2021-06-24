import React from "react";
import { Link } from "react-router-dom"
import { LOGIN, SIGNUP } from "../../../constants/routeConstants"
import demoImage from "../../../images/demo.png"
import withAuthRedirect from "../../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles"

function UserWelcomePage() {
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

      <div classeName={classes.searchContainer}>
        <svg className={classes.curveDiv} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#42b029" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,266.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className={classes.searchExample}>
          <svg className={classes.searchBlob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgb(249, 249, 249)" d="M57.6,-56.2C71.8,-43.4,78.4,-21.7,78.2,-0.2C77.9,21.2,70.8,42.4,56.6,55.8C42.4,69.2,21.2,74.7,0.2,74.6C-20.9,74.4,-41.8,68.5,-56,55.1C-70.3,41.8,-78.1,20.9,-77.4,0.7C-76.7,-19.5,-67.7,-39.1,-53.4,-51.9C-39.1,-64.6,-19.5,-70.6,1.1,-71.7C21.7,-72.8,43.4,-68.9,57.6,-56.2Z" transform="translate(100 100)" />
          </svg>
          <img className={classes.searchImg} src={demoImage} alt="App Screenshot"></img>
        </div>
      </div>
    </div>
  );
}

const isAuthPage = true
export default withAuthRedirect(UserWelcomePage, isAuthPage);
