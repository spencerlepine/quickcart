import express from "express"
import { fetchCart, addToCart, fetchCartItem, updateCartItem, removeFromCart } from "../controllers/cart.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId', auth, fetchCart)
router.get('/:userId', auth, fetchCartItem)
router.post('/:userId', auth, addToCart)
router.patch('/:userId', auth, updateCartItem)
router.delete('/:userId/:groceryName', auth, removeFromCart)

export default router