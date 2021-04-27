import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery, deleteAllGroceries, getGroceryCategories } from "../controllers/groceries.js"

const router = express.Router();

router.get('/:key', getGroceries)
router.get('/categories/:key', getGroceryCategories)
router.post('/:key/', createGrocery)
router.patch('/:key/:id', updateGrocery)
router.delete('/:key/:id', deleteGrocery)
router.delete('/:key', deleteAllGroceries)

export default router