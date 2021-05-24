import express from "express"
import { getGroceryCategories, addCategory } from "../controllers/categories.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId', auth,  getGroceryCategories)
router.post('/:userId', auth,  addCategory)

export default router