import grocerySchema from "../schema/grocerySchema"

const getEmptyGroceryFields = (resultObj = {}) => {
  // reference the schema to see if this field is custom

  // keep track of the final output
  const emptyFields = []

  // Get every key in the schema object
  for (const key in getEmptyGroceryFields) {
    // Reference the input object value here
    const inputVal = resultObj[key]

    if (!inputVal || inputVal === groceryItem[key]) {
      emptyFields.push(key)
    }
  }

  return emptyFields
}

export default getEmptyGroceryFields