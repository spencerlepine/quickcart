function save(data, filename) {
    const jsonGroceries = JSON.stringify(data)

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

const saveGroceryBackup = (groceryItems) => {
    let todaysDate = new Date()
    const fileName = `${todaysDate.getMonth()}_${todaysDate.getDate()}_${todaysDate.getFullYear()}_Backup(Groceries).txt`
    save(groceryItems, [fileName])
}

export default saveGroceryBackup