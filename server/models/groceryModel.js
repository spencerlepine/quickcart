import mongoose from "mongoose"

export const grocerySchema = mongoose.Schema({
    name: String,
    purchase_price: Number,
    purchase_size: String,
    serving_cost: Number,
    category: String,
    last_purchased: String,
    priority: String,
    image: String,
})