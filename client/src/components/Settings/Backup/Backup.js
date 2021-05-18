import React from "react"
import { useSelector } from "react-redux"
import GetAppIcon from '@material-ui/icons/GetApp';
import useStyles from "./styles"

const Backup = () => {
  const classes = useStyles()

  const groceries = useSelector((state) => state.groceries)

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

    alert(
      `Saving data for ${groceryCount} groceries items (${Math.round(
        blob.size / 1000
      )}kb)`
    )

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
      <button className={classes.backupButton} onClick={saveCart}>
        <GetAppIcon />
        Export Data
      </button>
    </div>
  )
}

export default Backup
