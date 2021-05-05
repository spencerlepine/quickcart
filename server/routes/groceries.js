import express from "express"
import { displayError, getGroceries, createGrocery, updateGrocery, deleteGrocery, deleteAllGroceries, getGroceryCategories } from "../controllers/groceries.js"

const router = express.Router();

router.get('/', displayError)
router.get('/:key/:offset', getGroceries)
router.post('/:key/', createGrocery)
router.patch('/:key/:id', updateGrocery)
router.delete('/:key/:id', deleteGrocery)
router.delete('/:key', deleteAllGroceries)

export default router