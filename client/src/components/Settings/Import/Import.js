import React from "react"
import { createGrocery } from "../../../actions/groceries"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import useStyles from "./styles"

const Import = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  const userId = useSelector(state => state.connectedUser)

  const importData = ({ target }) => {
    var fr = new FileReader()

    fr.readAsText(target.files[0])

    fr.onload = function () {
      var storageAccessed = JSON.parse(fr.result)

      storageAccessed.forEach((grocery) => {
        // Save me in Mongo Cluster
        const allowedKeys = [
          "name",
          "purchase_price",
          "purchase_size",
          "serving_cost",
          "category",
          "last_purchased",
          "priority",
          "image",
        ]

        let filteredObj = {}
        for (const prop in grocery) {
          if (allowedKeys.includes(prop)) {
            filteredObj[prop] = grocery[prop]
          }
        }

        dispatch(createGrocery(userId, filteredObj))
      })

      window.alert("Successfully imported your data :)")
      history.push("/")
    }
  }

  return (
    <div className={classes.importDiv}>
      <label className={classes.inputLabel}>Choose Backup File</label><br />
      <input
        className={classes.fileInput}
        onChange={importData}
        type="file"
        name="inputfile"
        id="inputfile"
      ></input>
    </div>
  )
}

export default Import
