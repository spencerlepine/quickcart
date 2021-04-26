import mongoose from "mongoose"

const cartSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    purchase_price: mongoose.Decimal128,
    purchase_size: String,
    serving_cost: mongoose.Decimal128,
    category: String,
    last_purchased: String,
    priority: String,
    image: String,
})

const CartItem = mongoose.model('CartItem', cartSchema)

export default CartItem