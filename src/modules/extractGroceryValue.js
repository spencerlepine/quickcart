import similarGroceryFields from "./similarGroceryFields"

const extractGroceryValue = (groceryObj, key) => {
  const similarFields = similarGroceryFields(key)
  const value = valueFromPossibleKeys(groceryObj, ...similarFields)
  return value;
}

export default extractGroceryValue;

function valueFromPossibleKeys(obj) {
  const possibleKeys = [...arguments]
  for (let i = 0; i < possibleKeys.length; i++) {
    var key = possibleKeys[i]
    if (obj[key]) {
      return obj[key]
    }
  }
}