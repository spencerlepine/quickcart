import React from "react"
import { useHistory } from "react-router-dom";
import useAuth from "../../context/AuthContext/AuthContext"
import useGroceries from "../../context/GroceriesContext/GroceriesContext"
import useCart from "../../context/CartContext/CartContext"

import useStyles from "./styles"

const Logout = ({ customWidth }) => {
  const classes = useStyles()
  const history = useHistory()
  const { logoutUser } = useAuth()
  const { setAllGroceryItems, setTotalGroceryCount } = useGroceries()
  const { setAllCartItems } = useCart()

  const handleLougout = async () => {
    try {
      logoutUser();
      setAllGroceryItems([]);
      setAllCartItems([]);
      setTotalGroceryCount(-1);
      history.push("/")
    } catch {
      console.log("logout failed");
    }
  }

  const styles = {
    paddingLeft: customWidth || "1em",
    paddingRight: customWidth || "1em",
  }

  return (
    <div className={classes.logoutDiv}>
      <button className={classes.logoutButton} onClick={handleLougout} style={styles}>Logout</button>
    </div>
  )
}

export default Logout
