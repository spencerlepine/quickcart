import React from "react"
import { clearGroceries, createGrocery } from "../../../actions/groceries"
import { useDispatch } from "react-redux"

const Import = () => {
  const dispatch = useDispatch()

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
      dispatch(clearGroceries())
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
          "last_purchase",
          "priority",
          "image",
        ]

        let filteredObj = {}
        for (const prop in grocery) {
          if (allowedKeys.includes(prop)) {
            if (typeof grocery[prop] === "object") {
              filteredObj[prop] = grocery[prop]["$numberDecimal"]
            } else {
              filteredObj[prop] = grocery[prop]
            }
          } else {
            alert(`${filteredObj.name} was invalid.`)
          }
        }

        dispatch(createGrocery(filteredObj))
      })

      window.alert("Successfully imported your data :)")
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
