import React from "react"
import { useDispatch } from "react-redux"
import useStyles from "./styles"

const Settings = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
       <div>
           <button>Clear Database</button>
       </div>
    )
}

export default Settings