import mongoose from "mongoose"
import CartItem from "../models/cartItem.js"
import dotenv from "dotenv"

export const fetchCart = async (req, res) => {
    try {
        const { key } = req.params

        // if (key === "demo123") {
        //     const groceryItems = await DemoGroceryItem.find()
        
        //     res.status(200).json(groceryItems)
        // } else 
        if (key !== process.env.USER_KEY) {
            res.status(404).json("invalid authentication key")
            return
        }

        const cartItems = await CartItem.find()
        
        res.status(200).json(cartItems)
    } catch(error) {
        res.status(404).json(error.message)
    }
}

export const fetchCartItem = async (req, res) => {
    try {
        const { key, id } = req.params

        if (key !== process.env.USER_KEY) {
            res.status(404).json("invalid authentication key")
            return
        }

        const thisCartItem = await CartItem.findById(id)
        
        res.status(200).json(thisCartItem)
    } catch(error) {
        res.status(404).json(error.message)
    }
}

export const addToCart = async (req, res) => {
    const { key, id } = req.params

    if (key !== process.env.USER_KEY) {
        res.status(404).json("invalid authentication key")
        return
    }

    const cartItem = req.body
    const withQuantity = {
        ...cartItem,
        quantity: 1,
    }

    const newCartItem = new CartItem(withQuantity)

    try {
        await newCartItem.save()

        res.status(201).json(newCartItem)
    } catch(error) {
        res.status(409).json(error.message)
    }
}

export const updateCartItem = async (req, res) => {
    const { id: _id, key } = req.params

    if (key !== process.env.USER_KEY) {
        res.status(404).json("invalid authentication key")
        return
    }
    
    const cartItem = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id")
    }

    const updateCartItem = await CartItem.findByIdAndUpdate(_id, { ...cartItem, _id }, { new: true })
    res.json(updateCartItem)
}

// export const deleteCartItem = async (req, res) => {
//     const { id: _id } = req.params

//     if (!mongoose.Types.ObjectId.isValid(_id)) {
//         return res.status(404).send("No post with that id")
//     }

//     await GroceryItem.findByIdAndDelete(_id)
    
//     res.json("Item deleted successfully")
// }

// export const deleteAll = async (req, res) => {
//     await GroceryItem.deleteMany()
    
//     res.json("Database cleared successfully")
// }