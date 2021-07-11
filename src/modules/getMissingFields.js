import grocerySchema from '../schema/groceryItem';

const getMissingFields = (groceryObj) => {
  const missingFields = [];

  const valuesToSkip = ['nutriscore_data_prepared_per', 'nutriscore_data_per', 'serving_cost', 'last_purchased', 'priority', 'image', '_id', 'ingredients', 'nutriscore_data', 'quantity', 'serving_quantity', 'unit_size'];
  // purchase_price: 0.01,// HANDLE PREFERED VALUE
  // purchase_size: '0 oz', // HANDLE PREFERED VALUE

  // Get every key in the schema object
  for (const key in grocerySchema) {
    // Reference the input object value here
    const inputVal = groceryObj[key];

    // Check if it exists
    if (!inputVal || inputVal === grocerySchema[key]) {
      // Check to skip this key
      if (!valuesToSkip.includes(key)) {
        missingFields.push(key);
      }
    }
  }

  return missingFields;
}

export default getMissingFields;