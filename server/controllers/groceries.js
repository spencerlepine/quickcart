import mongoose from "mongoose"
import GroceryItem from "../models/groceryItem.js"
import dotenv from "dotenv"

export const getGroceries = async (req, res) => {
    try {
        const { key } = req.params
        if (key !== process.env.USER_KEY) {
            res.status(404).json("invalid authentication key")
            return
        }

        const groceryItems = await GroceryItem.find()
        
        res.status(200).json(groceryItems)
    } catch(error) {
        res.status(404).json(error.message)
    }
}

export const getGroceriesCategories = async (req, res) => {
    try {
        const groceryItems = await GroceryItem.aggregate(
            [
                {
                    $group:{_id:"$category"}
                }
            ]
        )

        res.status(200).json(groceryItems)
    } catch(error) {
        res.status(404).json(error.message)
    }
}

export const createGrocery = async (req, res) => {
    const groceryItem = req.body

    const newGrocery = new GroceryItem(groceryItem)

    try {
        await newGrocery.save()

        res.status(201).json(newGrocery)
    } catch(error) {
        res.status(409).json(error.message)
    }
}

export const updateGrocery = async (req, res) => {
    const { id: _id } = req.params
    const groceryItem = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id")
    }

    const updateGroceryItem = await GroceryItem.findByIdAndUpdate(_id, { ...groceryItem, _id }, { new: true })
    res.json(updateGroceryItem)
}

export const deleteGrocery = async (req, res) => {
    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id")
    }

    await GroceryItem.findByIdAndDelete(_id)
    
    res.json("Item deleted successfully")
}

export const deleteAll = async (req, res) => {
    await GroceryItem.deleteMany()
    
    res.json("Database cleared successfully")
}