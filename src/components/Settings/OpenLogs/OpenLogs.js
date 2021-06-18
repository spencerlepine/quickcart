import React from "react"
import LaunchIcon from '@material-ui/icons/Launch'; import { Link } from "react-router-dom";
import { CART_LOGS } from "../../../constants/routeConstants"
import useStyles from "./styles"

const OpenLogs = () => {
  const classes = useStyles()

  return (
    <Link
      className={classes.openLogButton}
      to={CART_LOGS}
    >
      View Logs <span className={classes.downloadArrow}><LaunchIcon /></span>
    </Link>
  )
}

export default OpenLogs
