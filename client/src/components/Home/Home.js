import React from "react"
import useStyles from "./styles"

const Home = () => {
    const classes = useStyles()

    return (
        <div>
            <h1 className={classes.title}>Welcome to Spencers Groceries</h1>
        </div>
    )
}

export default Home
