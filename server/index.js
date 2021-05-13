import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import recommendedRoutes from "./routes/recommended.js"
import cartRoutes from "./routes/cart.js"
import categoryRoutes from "./routes/categories.js"
import countRoutes from "./routes/count.js"

import groceryRouter from "./routes/groceryRouter.js"
import userRouter from "./routes/userRouter.js"

const app = express()
dotenv.config()

app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://grocery-server-sl.herokuapp.com",
      ],
      credentials: true,
    })
  );
app.use(express.json());

app.use(cookieParser());

app.use('/groceries', groceryRouter)
app.use('/auth', userRouter)

app.use('/recommended', recommendedRoutes)
app.use('/cart', cartRoutes)
app.use('/categories', categoryRoutes)
app.use('/count', countRoutes)


app.get('/', (req, res) => {
    res.send('Welcome to Spencer\'s Grocery API')
})

// Connect to the MongoDB cluster
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)