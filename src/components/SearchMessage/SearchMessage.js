import React from "react"
import useStyles from "./styles"

const SearchMessage = ({ message }) => {
  const classes = useStyles()

  return (
    <div className={classes.messageContainer}>
      <p>{message}</p>
    </div>
  )
}

export default SearchMessage
