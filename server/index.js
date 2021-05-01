import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"

import groceryRoutes from "./routes/groceries.js"
import recommendedRoutes from "./routes/recommended.js"
import cartRoutes from "./routes/cart.js"
import authRoutes from "./routes/auth.js"

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit:  "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit:  "30mb", extended: true }))
app.use(cors())

app.use('/groceries', groceryRoutes)
app.use('/recommended', recommendedRoutes)
app.use('/cart', cartRoutes)
app.use('auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Spencer\'s Grocery API')
})

// Connect to the MongoDB cluster
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)