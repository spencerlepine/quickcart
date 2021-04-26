import express from "express"
import { fetchCart, addToCart, fetchCartItem, updateCartItem } from "../controllers/cart.js"

const router = express.Router();

router.get('/:key', fetchCart)
router.get('/:key/:id', fetchCartItem)
router.post('/:key', addToCart)
router.patch('/:key/:id', updateCartItem)

export default router