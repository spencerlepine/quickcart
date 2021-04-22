import React from "react"
import { getGroceries } from "../../actions/groceries"
import { useDispatch} from "react-redux"
import useStyles from "./styles"

import Backup from "./Backup/Backup"
import Import from "./Import/Import"

const Settings = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
       <div>
           <Backup />
           <Import />
           <button onClick={()=>alert('delete?')}>Clear Database</button>
       </div>
    )
}

export default Settings