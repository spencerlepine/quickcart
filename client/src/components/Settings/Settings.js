import React from "react"
import useStyles from "./styles"

import Backup from "./Backup/Backup"
import Import from "./Import/Import"
import Clear from "./Clear/Clear"

const Settings = () => {
    const classes = useStyles()

    return (
       <div className={classes.settingsContainer}>
           <Backup />
           <Import />
           <Clear />
       </div>
    )
}

export default Settings