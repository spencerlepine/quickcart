import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGroceries } from "../../actions/groceries"
import { setGroceryConnection } from "../../actions/connection"
import LoadingGif from "../../images/loading.gif"
import useStyles from "./styles.js"

const FetchLogic = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const userId = useSelector(state => state.connectedUser)
  const groceries = useSelector((state) => state.groceries)
  const { auth: authConnection, groceries: groceryConnection } = useSelector(state => state.connection)
  const totalGroceryCount = useSelector((state) => state.count)

  useEffect(() => {
      if (authConnection === "connected") {
        dispatch(getGroceries(userId))
        return
      }
  }, [authConnection])


  useEffect(() => {
    if (groceryConnection !== "connected") {

      if (groceries.length < totalGroceryCount) {  
        const lastGrocery = groceries.length > 0 ? groceries.pop().name : 0
        dispatch(getGroceries(userId, lastGrocery))
        return
     } else if (totalGroceryCount !== 0) {
       dispatch(setGroceryConnection("connected"))
       return
     }
    }
  }, [dispatch, groceries, totalGroceryCount, groceryConnection])

  return (
    <>
      {authConnection === "pending" && 
      (
        <div className={classes.fullscreenDiv}>
          <img src={LoadingGif} className={classes.center} alt="Loading animation"></img>
        </div>
      )}
    </>
  )
}

export default FetchLogic