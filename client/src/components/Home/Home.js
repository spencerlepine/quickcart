import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

const Home = () => {
    return (
        <div>
            <h1>Welcome to Spencers Groceries</h1>
            <Link to="/overview">Overview</Link>
            <Link to="/form">Add Item</Link>
        </div>
    )
}

export default Home
