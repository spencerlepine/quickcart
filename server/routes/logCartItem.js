import express from "express"
import { logCartItem } from "../controllers/cart.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.post('/:userId', auth, logCartItem)

export default router