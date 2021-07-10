import nutriscoreSchema from '../schema/nutriscoreSchema';

const filterNutriscoreObj = (resultObj = {}) => {
  // update the keys and values
  // pass in placeholder values

  // keep track of the final output
  const formattedObj = { ...nutriscoreSchema };

  // Get every key in the schema object
  for (const key in nutriscoreSchema) {
    // Reference the input object value here
    const inputVal = resultObj[key];

    // Check if it exists
    if (inputVal) {
      // Check if it is custom
      if (inputVal !== nutriscoreSchema[key]) {
        // Make sure the data type wasn't changed
        if (typeof nutriscoreSchema[key] === typeof inputVal) {
          // Save the custom value
          formattedObj[key] = inputVal;
        }
      } else {
        // Save the defualt value
        formattedObj[key] = nutriscoreSchema[key];
      }
    }
  }

  return formattedObj;
}

export default filterNutriscoreObj;