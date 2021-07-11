// [key] : QuickCart convention
// values : external api conventions (similar keys)
// LEFT will be found first
const similarFields = {
  'name': ['product_nameen', 'product_name', 'name', 'resultObj_nameen', 'resultObj_name', 'generic_name', 'title'],
  'priority': ['priority', 'rating', 'preference'],
  'quantity': ['quantity'],
  'purchase_size': ['purchase_size', 'quantity', 'net_weight_value', 'net_weight_unit', 'volume_unit', 'serving_size'],
  'last_purchased': ['last_purchased', 'last_purchase', 'purchase_date'],
  'category': ['category'],
  'serving_cost': ['serving_cost', 'serving_price'],
  'purchase_price': ['purchase_price', 'unit_price', 'cost', 'price'],
  'unit_size': ['unit_size', 'net_weight_value', 'net_weight_unit', 'volume_unit', 'purchase_size'],
  'upc': ['item_upc', 'upc', 'upc_code', 'item_upc_code', 'code'],
  'ingredients': ['ingredients', 'ingredients_tags'],
  'brand': ['brands', 'brand', 'brand_owner', 'brand_owner_imported'],
  '_id': ['_id', 'id'],
  'serving_size': ['serving_size'],
  'serving_quantity': ['serving_quantity', 'number_of_servings'],
  'nutriscore_data_per': ['nutriscore_data_per', 'serving_size'],
  'nutriscore_data_prepared_per': ['nutriscore_data_prepared_per', 'nutriscore_data_per', 'serving_size'],
  'image': ['image'],
}

const similarGroceryFields = (key) => {
  return similarFields[key] || [];
}

export default similarGroceryFields;