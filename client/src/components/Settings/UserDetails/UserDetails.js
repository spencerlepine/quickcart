import React from "react"
import { useAuth } from "../../../contexts/AuthContext"
import useStyles from "./styles"

const UserDetails = () => {
  const classes = useStyles()
  const { currentUser } = useAuth()
  
  return (
    <div className={classes.userDetailsDiv}>
      <p className={classes.profileEmail}>{currentUser.email}</p>
    </div>
  )
}

export default UserDetails
