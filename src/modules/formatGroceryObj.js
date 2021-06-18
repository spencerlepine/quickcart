// use grocery item/product schema
import grocerySchema from "../schema/groceryItem"
import toTitleCase from "../modules/toTitleCase"
import missingImage from "../images/missing.jpeg"



const formatGroceryObj = (resultObj = {}) => {
  // update the keys and values
  // pass in placeholder values

  const currentTime = new Date().getTime().toString()

  const itemName = valueFromPossibleKeys(resultObj, "product_nameen", "product_name", "name", "resultObj_nameen", "resultObj_name", "generic_name") || grocerySchema.name
  const formattedName = itemName.replace(/-/gi, " ")
  const shortenedName = formattedName.slice(0, 25);
  const itemImage = valueFromPossibleKeys(resultObj, "image", "image_url", "image_small_url") || missingImage
  const itemPriority = valueFromPossibleKeys(resultObj, "priority", "rating", "preference") || grocerySchema.priority
  const itemQuantity = valueFromPossibleKeys(resultObj, "quantity", "servings_per", "serving_count") || grocerySchema.quantity
  const itemPurchaseSize = valueFromPossibleKeys(resultObj, "purchase_size", "quantity", "net_weight_value", "net_weight_unit", "volume_unit") || itemQuantity || grocerySchema.purchase_size
  const itemLastBought = valueFromPossibleKeys(resultObj, "last_purchased", "last_purchase", "purchase_date") || grocerySchema.last_purchased
  const itemCategory = valueFromPossibleKeys(resultObj, "category") || grocerySchema.category
  const itemServingCost = valueFromPossibleKeys(resultObj, "serving_cost", "serving_price") || grocerySchema.serving_cost
  const itemPurchasePrice = valueFromPossibleKeys(resultObj, "purchase_price", "unit_price", "cost") || grocerySchema.purchase_price
  const itemUnitSize = valueFromPossibleKeys(resultObj, "unit_size", "quantity", "net_weight_value", "net_weight_unit", "volume_unit", "purchase_size") || grocerySchema.unit_size
  const itemUPC = valueFromPossibleKeys(resultObj, "item_upc", "upc", "upc_code", "item_upc_code", "code") || grocerySchema.upc
  const itemId = valueFromPossibleKeys(resultObj, "_id", "id") || grocerySchema._id || currentTime
  const itemBrand = valueFromPossibleKeys(resultObj, "brands", "brand", "brand_owner", "brand_owner_imported") || grocerySchema.brand
  const itemIngredients = valueFromPossibleKeys(resultObj, "ingredients", "ingredients_tags") || grocerySchema.ingredients
  const itemNutriscoreData = valueFromPossibleKeys(resultObj, "nutriscore_data") || grocerySchema.nutriscore_data
  const itemNutriscoreDataPer = valueFromPossibleKeys(resultObj, "nutriscore_data_per") || grocerySchema.nutriscore_data_per
  const itemNutriscoreDataPreparedPer = valueFromPossibleKeys(resultObj, "nutriscore_data_prepared_per") || grocerySchema.nutriscore_data_prepared_per
  const itemServingSize = valueFromPossibleKeys(resultObj, "serving_size") || grocerySchema.serving_size
  const ItemServingQuantity = valueFromPossibleKeys(resultObj, "serving_quantity") || grocerySchema.serving_quantity

  const formattedObj = {
    name: toTitleCase(shortenedName),
    image: itemImage,
    priority: itemPriority,
    purchase_size: itemPurchaseSize,
    last_purchased: itemLastBought,
    purchase_price: itemPurchasePrice,
    serving_cost: itemServingCost,
    category: itemCategory,
    upc: itemUPC,
    _id: itemId,
    brand: itemBrand,
    ingredients: itemIngredients,
    nutriscore_data: itemNutriscoreData,
    nutriscore_data_per: itemNutriscoreDataPer,
    nutriscore_data_prepared_per: itemNutriscoreDataPreparedPer,
    quantity: itemQuantity,
    serving_size: itemServingSize,
    serving_quantity: ItemServingQuantity,
    unit_size: itemUnitSize,
  };

  return formattedObj
}

function valueFromPossibleKeys(obj) {
  const possibleKeys = [...arguments]
  for (let i = 0; i < possibleKeys.length; i++) {
    var key = possibleKeys[i]
    if (obj[key]) {
      return obj[key]
    }
  }
}

export default formatGroceryObj