import React from "react"
import { useSelector } from "react-redux"
import useStyles from "./styles"

import Backup from "./Backup/Backup"
import Import from "./Import/Import"
import Clear from "./Clear/Clear"

const Settings = () => {
  const classes = useStyles()
  const authKey = useSelector((state) => state.authentication)

  return (
    <div className={classes.settingsContainer}>
      <Backup />
      {authKey !== "demo123" && <Import />}
      {authKey !== "demo123" && <Clear />}
    </div>
  )
}

export default Settings
