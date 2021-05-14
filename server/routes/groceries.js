
import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery, getGroceryCategories } from "../controllers/groceries.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId/:lastGrocery', auth, getGroceries)
router.post('/:userId', auth, createGrocery)
router.delete('/:userId/:groceryName', auth, deleteGrocery)
router.patch('/:userId', updateGrocery)


export default router