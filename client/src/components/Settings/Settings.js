import React from "react"
import { getGroceries } from "../../actions/groceries"
import { useDispatch} from "react-redux"
import useStyles from "./styles"

import Backup from "./Backup/Backup"
import Import from "./Import/Import"
import Clear from "./Clear/Clear"

const Settings = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
       <div>
           <Backup />
           <Import />
           <Clear />
       </div>
    )
}

export default Settings