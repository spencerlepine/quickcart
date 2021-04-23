import mongoose from "mongoose"
import GroceryItem from "../models/groceryItem.js"

export const getReccomended = async (req, res) => {
    try {
        const groceryItems = await GroceryItem.find()
        
        console.log("returning the reccomended items")
        console.log(`the length is ${groceryItems.length}`)

        res.status(200).json(groceryItems)
    } catch(error) {
        res.status(404).json(error.message)
    }
}
