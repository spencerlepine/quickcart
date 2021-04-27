import React from "react"
import { clearGroceries, createGrocery } from "../../../actions/groceries"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

const Import = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const authKey = useSelector(state => state.authentication)

  // https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-javascript
  /*function csvJSON(csv) {
    //var csv is the CSV file with headers

    var lines = csv.split("\n")

    var result = []

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers = lines[0].split(",")

    for (var i = 1 i < lines.length i++) {
      var obj = {}
      var currentline = lines[i].split(",")

      for (var j = 0 j < headers.length j++) {
        obj[headers[j]] = currentline[j]
      }

      result.push(obj)
    }

    //return result //JavaScript object
    return JSON.stringify(result) //JSON
  }*/

  const importData = ({ target }) => {
    if (window.confirm("Overwrite existing data?")) {
      dispatch(clearGroceries(authKey))
    }

    var fr = new FileReader()

    fr.readAsText(target.files[0])

    fr.onload = function () {
      var storageAccessed = JSON.parse(fr.result)

      storageAccessed.forEach((grocery) => {
        // Save me in Mongo Cluster
        const allowedKeys = [
          "_id",
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

        dispatch(createGrocery(authKey, filteredObj))
      })

      window.alert("Successfully imported your data :)")
      history.push("/")
    }
  }

  return (
    <div>
      <label>Import Data</label>
      <input
        onChange={importData}
        type="file"
        name="inputfile"
        id="inputfile"
      ></input>
    </div>
  )
}

export default Import
