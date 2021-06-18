import React from "react"
import { useHistory } from "react-router-dom";
import useAuth from "../../context/AuthContext/AuthContext"
import userGroceries from "../../context/GroceriesContext/GroceriesContext"
import useStyles from "./styles"

const Logout = ({ customWidth }) => {
  const classes = useStyles()
  const history = useHistory()
  const { logoutUser } = useAuth()
  const { setAllGroceryItems, setTotalGroceryCount } = userGroceries()
  const { setAllCartItems } = userGroceries()

  const handleLougout = async () => {
    try {
      logoutUser();
      setAllGroceryItems([]);
      setTotalGroceryCount(-1);
      setAllCartItems([]);
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
