import express from "express"
import { getGroceryCategories } from "../controllers/groceries.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId', auth,  getGroceryCategories)

export default router