import React from 'react'
import "./styles.css"

const FoodItem = ({ groceryItem }) => {
    return (
        <div>
            <h6>{groceryItem.name}</h6>
            <p>{parseInt(groceryItem.purchase_price["$numberDecimal"]).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
            <p>{groceryItem.purchase_size}</p>
            <p>{groceryItem.serving}</p>
            <p>{groceryItem.servings_per}</p>
        </div>
    )
}

export default FoodItem
