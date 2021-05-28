import React from "react"
import useStyles from "./styles"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import Backup from "./Backup/Backup"
import Import from "./Import/Import"
import Logout from "../Logout/Logout"

const Settings = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.settingsContainer}>
      <Import />
      <hr />
      <Backup />
      <Logout />
    </div>
  )
}

export default withAuthRedirect(Settings)
