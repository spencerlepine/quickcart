import mongoose from "mongoose"
import GroceryItem from "../models/groceryItem.js"
import DemoGroceryItem from "../models/demoGroceryItem.js"
import CartItem from "../models/cartItem.js"

export const displayError = async (req, res) => {
    res.status(200).json("Usage: url/recommended/<authKey>")
  }

export const getRecommended = async (req, res) => {
    try {
        const { key } = req.params
        // Fetch all of the grocery items
        let groceryItems
        if (key === process.env.USER_KEY) {
            groceryItems = await GroceryItem.find()
        } else if (key === "demo123") {
            groceryItems = await DemoGroceryItem.find()
        } else {
            res.status(404).json("invalid authentication key")
            return
        }

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
        let todaysDate = new Date()
        allGroceryCategories.forEach(category => {
            let matchingCategoryItems = availableGroceries.filter(grocery => {
                let groceryExpirationDate = new Date(grocery["last_purchased"])

                let groceryLifeSpan = grocery["last_purchased"] / grocery["serving_cost"]
                console.log("Grocery life span is: ", groceryLifeSpan)
                console.log(groceryLifeSpan)
                groceryExpirationDate.setDate(groceryExpirationDate.getDate() + groceryLifeSpan);
                let groceryNotExpired = todaysDate <= groceryExpirationDate
                console.log(`Todays date: ${todaysDate}, expiration: ${groceryExpirationDate}`)
                console.log(groceryNotExpired)
                return grocery.category === category && groceryNotExpired
            })
            groupedGroceries[category] = matchingCategoryItems
        })

        // Sort groceries
        for (const prop in groupedGroceries) {
            // dont add this object IF its estimated lifeSpan is shorter than the current date difference



            let thisCategoryList = [...groupedGroceries[prop]]
            // Sort by proirity
            thisCategoryList.sort((groceryA, groceryB) => {
                const priorityA = groceryA["priority"]
                const priorityB = groceryB["priority"]

                const servingCostA = Math.max(0, 5 - ( groceryA["serving_cost"] * 2.5 ))
                const servingCostB = Math.max(0, 5 - ( groceryB["serving_cost"] * 2.5 ))

                const lifeSpanA = Math.min(groceryA["purchase_price"] / ( groceryA["serving_cost"] ), 15) / 3
                const lifeSpanB = Math.min(groceryB["purchase_price"] / ( groceryB["serving_cost"] ), 15) / 3

                const lastPurchaseA = parseInt((Date.now() - Date.parse(groceryA["last_purchased"]) ) / 100000000)
                const lastPurchaseB = parseInt((Date.now() - Date.parse(groceryB["last_purchased"]) ) / 100000000)

                const scoreA = priorityA + servingCostA + lifeSpanA + lastPurchaseA
                const scoreB = priorityB + servingCostB + lifeSpanB + lastPurchaseB

                return scoreB - scoreA
            })

            // Return top 6 from each category
            let topRange = prop === "bread" ? 2 : 6
            groupedGroceries[prop] = thisCategoryList.slice(0, Math.min(thisCategoryList.length, topRange))
        }

        res.status(200).json(groupedGroceries)
    } catch(error) {
        res.status(404).json(error.message)
    }
}
