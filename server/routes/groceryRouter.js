
import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery, deleteAllGroceries, getGroceryCategories } from "../controllers/groceries.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:offset', auth, getGroceries)

// router.get('/:key/:offset', getGroceries)
// router.post('/:key/', createGrocery)
// router.patch('/:key/:id', updateGrocery)
// router.delete('/:key/:id', deleteGrocery)
// router.delete('/:key', deleteAllGroceries)

export default router