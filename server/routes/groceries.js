
import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery, getGroceryItem } from "../controllers/groceries.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId/:lastGrocery', auth, getGroceries)
router.get('/:userId/:groceryName', auth, getGroceryItem)
router.post('/:userId', auth, createGrocery)
router.delete('/:userId/:groceryName', auth, deleteGrocery)
router.patch('/:userId', auth, updateGrocery)

export default router