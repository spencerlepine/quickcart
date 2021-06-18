import nutriscoreSchema from "./nutriscoreSchema.js"

const todaysDate = new Date().toISOString().slice(0, 10);

const grocerySchema = {
  name: "unknown",
  purchase_price: "0.01",
  purchase_size: "0 oz",
  serving_cost: "0.01",
  category: "unknown",
  last_purchased: todaysDate,
  priority: "3",
  upc: "",
  image: "",
  _id: "",
  brand: "unknown",
  ingredients: [],
  nutriscore_data: nutriscoreSchema,
  nutriscore_data_per: "0.1 g",
  nutriscore_data_prepared_per: "0.1 g",
  quantity: 1,
  serving_size: "0.1 g",
  serving_quantity: 1,
  unit_size: "1 unit",
}

export default grocerySchema