import React from "react"
import { useDispatch, useSelector } from "react-redux"
import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { SET_CURRENT_ERROR } from "../../../constants/actionTypes.js"
import useStyles from "./styles"

const Backup = () => {
  const classes = useStyles()

  const groceries = useSelector((state) => state.groceries)
  const dispatch = useDispatch()

  function save(data, filename) {
    const groceryCount = data.length
    const jsonGroceries = JSON.stringify(groceries)

    data = jsonGroceries

    if (!data) {
      console.error("Console.save: No data")
      return
    }

    if (!filename) filename = "console.json"

    if (typeof filtered === "object") {
      data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], { type: "text/json" }),
      e = document.createEvent("MouseEvents"),
      a = document.createElement("a")

    if (data === "[null]") {
      alert("No items found!")
      return
    }
    
    const downloadMessage = {
      name: "Groceries Exported!",
      message: `Saved ${groceryCount} groceries (${(blob.size / 1000000).toFixed(1)}mb)`,
      type: "success"
    }
    dispatch({ type: SET_CURRENT_ERROR, payload: downloadMessage })

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":")
    e.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
    a.dispatchEvent(e)
  }

  const saveCart = () => {
    let todaysDate = new Date()
    const fileName = `${todaysDate.getMonth()}_${todaysDate.getDate()}_${todaysDate.getFullYear()}_Backup(Groceries).txt`
    save(groceries, [fileName])
  }

  return (
    <div className={classes.backupDiv}>
      <GetAppIcon className={classes.importIcon} />
      <label className={classes.inputLabel}>
        Export Grocery Data
      </label>

      <button className={classes.backupButton} onClick={saveCart}>
        Download Backup <span className={classes.downloadArrow}><ArrowDownwardIcon /></span>
      </button>
    </div>
  )
}

export default Backup
