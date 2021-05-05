import express from "express"
import { getGroceryCategories } from "../controllers/groceries.js"

const router = express.Router();

router.get('/:key', getGroceryCategories)

export default router