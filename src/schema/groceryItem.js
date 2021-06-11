const todaysDate = new Date().toISOString().slice(0, 10);

const grocerySchema = {
  name: "",
  purchase_price: "",
  purchase_size: "",
  serving_cost: "",
  category: "",
  last_purchased: todaysDate,
  priority: "0",
  image: "",
}

export default grocerySchema