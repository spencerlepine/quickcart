import mongoose from "mongoose"

const cartSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    purchase_price: Number,
    purchase_size: String,
    serving_cost: Number,
    category: String,
    last_purchased: String,
    priority: String,
    image: String,
})

const DemoCartItem = mongoose.model('DemoCartItem', cartSchema)

export default DemoCartItem