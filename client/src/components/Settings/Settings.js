import React from "react"
import { useSelector } from "react-redux"
import useStyles from "./styles"

import Backup from "./Backup/Backup"
import Import from "./Import/Import"
import Clear from "./Clear/Clear"
import Logout from "./Logout/Logout"
import ShowPassword from "./ShowPassword/ShowPassword"

const Settings = () => {
  const classes = useStyles()
  const authKey = useSelector((state) => state.authentication)
  console.log(authKey)
  console.log(localStorage.getItem("groceryAuthKey"))
  return (
    <div className={classes.settingsContainer}>
      <Backup />
      {authKey !== "demo123" && <Import />}
      {authKey !== "demo123" && <Clear />}
      {authKey !== "demo123" && <ShowPassword />}
      {authKey && <Logout />}
    </div>
  )
}

export default Settings
