import mongoose from "mongoose"
import GroceryItem from "../models/groceryItem.js"
import CartItem from "../models/cartItem.js"

export const getReccomended = async (req, res) => {
    try {
        const { key } = req.params

        if (key !== process.env.USER_KEY) {
            res.status(404).json("invalid authentication key")
            return
        }

        // Fetch all of the grocery items
        const groceryItems = await GroceryItem.find()

        // Get rid of items that are in the cart already
        const availableGroceries = []
        for (var i = 0; i < groceryItems.length; i++) {
            const alreadyInCart = await CartItem.findById(groceryItems[i]["_id"])
            if (!alreadyInCart) {
                availableGroceries.push(groceryItems[i])
            }
        }

        // Extract available categories
        const allGroceryCategories = []
        availableGroceries.forEach(grocery => {
            if (!allGroceryCategories.includes(grocery.category)) {
                allGroceryCategories.push(grocery.category)
            }
        })

        // Group groceries by category
        let groupedGroceries = {}
        allGroceryCategories.forEach(category => {
            let matchingCategoryItems = availableGroceries.filter(grocery => grocery.category === category)
            groupedGroceries[category] = matchingCategoryItems
        })

        // Sort groceries
        for (const prop in groupedGroceries) {
            let thisCategoryList = [...groupedGroceries[prop]]
            // Sort by proirity
            thisCategoryList.sort((groceryA, groceryB) => {
                // The HIGHER the priority (Bigger)
                const priorityA = groceryA["priority"] 
                const priorityB = groceryB["priority"]
                return priorityB - priorityA
            })

            // thisCategoryList.sort((groceryA, groceryB) => {
            //     // The LOWER the serving cost (Smaller)
            //     const servingCostA = groceryA["serving_cost"] 
            //     const servingCostB = groceryB["serving_cost"]
            //     return servingCostA - servingCostB
            // })

            thisCategoryList.sort((groceryA, groceryB) => {
                // SHORTER life span (Smaller)
                const lifeSpanA = groceryA["purchase_cost"] / groceryA["serving_cost"] 
                const lifeSpanB = groceryB["purchase_cost"] / groceryB["serving_cost"] 
                return lifeSpanA - lifeSpanB
            })

            thisCategoryList.sort((groceryA, groceryB) => {
                // The OLDER the purchase date (Bigger)
                const lastPurchaseA = groceryA["last_purchased"]
                const lastPurchaseB = groceryB["last_purchased"]
                return Date.parse(lastPurchaseB) - Date.parse(lastPurchaseA)
            })

            // Return top 3 from each category
            groupedGroceries[prop] = thisCategoryList.slice(0, 3)
        }

        res.status(200).json(groupedGroceries)
    } catch(error) {
        res.status(404).json(error.message)
    }
}
