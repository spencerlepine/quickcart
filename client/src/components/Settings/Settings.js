import React from "react"
import { useSelector } from "react-redux"
import useStyles from "./styles"

import Backup from "./Backup/Backup"
import Import from "./Import/Import"
import Clear from "./Clear/Clear"
import Logout from "./Logout/Logout"
import BackupCSV from "./BackupCSV/BackupCSV"

const Settings = () => {
  const classes = useStyles()
  const authKey = useSelector((state) => state.authentication)

  return (
    <div className={classes.settingsContainer}>
      
      <Import />
      <Backup />
      <BackupCSV />
      <Clear />
      {authKey && <Logout />}
    </div>
  )
}

export default Settings
