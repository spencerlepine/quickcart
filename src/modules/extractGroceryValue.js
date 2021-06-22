import similarGroceryFields from "./similarGroceryFields"
import grocerySchema from "./schema/groceryItem"

const extractGroceryValue = (groceryObj, key) => {
  if (groceryObj) {
    const similarFields = similarGroceryFields(key)
    const value = valueFromPossibleKeys(groceryObj, similarFields) || grocerySchema[key]
    let trimmedVal = typeof value === "string" ? value.trim() : value
    return trimmedVal;
  }
}

export default extractGroceryValue;

function valueFromPossibleKeys(obj, possibleKeys) {
  for (let i = 0; i < possibleKeys.length; i++) {
    var key = possibleKeys[i]
    if (obj[key]) {
      return obj[key]
    }
  }
}