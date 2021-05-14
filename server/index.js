import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import userRouter from "./routes/user.js"
import groceryRouter from "./routes/groceries.js"
import recommendedRoutes from "./routes/recommended.js"
import categoryRoutes from "./routes/categories.js"
import countRoutes from "./routes/grocery-count.js"
import cartRoutes from "./routes/cart.js"

const app = express()
dotenv.config()

app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://grocery-client-sl.herokuapp.com",
      ],
      credentials: true,
    })
  );
app.use(express.json());

app.use(cookieParser());

app.use('/auth', userRouter)
app.use('/groceries', groceryRouter)
app.use('/grocery-count', countRoutes)
app.use('/categories', categoryRoutes)
app.use('/recommended', recommendedRoutes)
app.use('/cart', cartRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Spencer\'s Grocery API')
})

// Connect to the MongoDB cluster
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))