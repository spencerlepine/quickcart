import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { createGrocery } from "../../actions/groceries"
import HomeButton from "../HomeButton/HomeButton"
import "./styles.css"

const Form = () => {
    const [ itemData, setItemData ] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setItemData(prevItems => ({ ...prevItems, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (itemData.name && itemData.purchase_price && itemData.purchase_size && itemData.serving && itemData.servings_per) {
            dispatch(createGrocery(itemData))
            history.push("/overview")
        }
    }

    return (
        <div>
            <HomeButton />
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" value={itemData.name} placeholder="Name" />
                <input onChange={handleChange} name="purchase_price" value={itemData.purchase_price} placeholder="Purchase Price" />
                <input onChange={handleChange} name="purchase_size" value={itemData.purchase_size} placeholder="Purchase Size" />
                <input onChange={handleChange} name="serving" value={itemData.serving} placeholder="Serving Size" />
                <input onChange={handleChange} name="servings_per" value={itemData.servings_per} placeholder="Servings Per" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
