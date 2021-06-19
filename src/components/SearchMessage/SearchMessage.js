import React from "react"
import useStyles from "./styles"
import search from "../../images/search.png"
import { HOME } from "../../constants/routeConstants"
import { Link } from "react-router-dom";

const SearchMessage = ({ message }) => {
  const classes = useStyles()

  return (
    <div className={classes.messageContainer}>
      <img src={search} alt="search prompt" className={classes.searchImg}></img>
      <p className={classes.searchMessage}>{message}</p>
      <Link to={HOME} className={classes.homeLink}>Go Home</Link>
    </div>
  )
}

export default SearchMessage
