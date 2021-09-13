export const groceryItemSchema = {
  'name': 'string',
  'purchase_size': 'object',
  'last_purchased': 'date (string)',
  'category': 'string',
  'serving_cost': 'number',
  'purchase_price': 'number',
  'upc': 'number',
  'brand': 'string',
  '_id': 'string',
  'serving_size': 'object',
  'serving_quantity': 'number',
  'image': 'string',
};

export const similarGroceryFields = {
  'name': ['product_nameen', 'product_name', 'name', 'resultObj_nameen', 'resultObj_name', 'generic_name', 'title'],
  'priority': ['priority', 'rating', 'preference'],
  'quantity': ['quantity'],
  'purchase_size': ['purchase_size', 'quantity', 'net_weight_value', 'net_weight_unit', 'volume_unit', 'serving_size', 'unit_size'],
  'last_purchased': ['last_purchased', 'last_purchase', 'purchase_date'],
  'category': ['category'],
  'serving_cost': ['serving_cost', 'serving_price'],
  'purchase_price': ['purchase_price', 'unit_price', 'cost', 'price'],
  'upc': ['item_upc', 'upc', 'upc_code', 'item_upc_code', 'code'],
  'ingredients': ['ingredients', 'ingredients_tags'],
  'brand': ['brands', 'brand', 'brand_owner', 'brand_owner_imported'],
  '_id': ['_id', 'id'],
  'serving_size': ['serving_size'],
  'serving_quantity': ['serving_quantity', 'number_of_servings'],
  'image': ['image', 'image_front_small_url', 'image_front_thumb_url', 'image_front_url', 'image_small_url', 'image_thumb_url', 'image_url'],
};

const valueFromPossibleKeys = (obj, possibleKeys) => {
  for (let i = 0; i < possibleKeys.length; i++) {
    const key = possibleKeys[i];
    if (obj[key]) {
      return obj[key];
    }
  }
};

const extractGroceryValue = (groceryObj, key) => {
  if (groceryObj) {
    const similarFields = similarGroceryFields[key];
    let value = valueFromPossibleKeys(groceryObj, similarFields);

    if (key === 'serving_size' || key === 'purchase_size') {
      const sizeRe = new RegExp(/(\d+)[ ]*([a-zA-Z]+)/, 'i');
      const formatUnit = { 'grams': 'g', 'gram': 'g', 'ounces': 'oz' };

      if (typeof value === 'string') {
        const matches = value.match(sizeRe);

        value = {
          unit: formatUnit[matches[2]] ? formatUnit[matches[2]] : matches[2] || 'unit',
          count: matches[1],
        };
      } else {
        value = { unit: 1, count: 0 };
      }
    }

    return typeof value === 'string' ? value.trim() : value;
  }
};

export const formatProductForQuickcart = productObj => {
  const formattedObj = {};
  for (const key in groceryItemSchema) {
    formattedObj[key] = extractGroceryValue(productObj, key);
  }
  return formattedObj;
};