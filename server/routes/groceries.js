import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery, deleteAllGroceries } from "../controllers/groceries.js"

const router = express.Router();

router.get('/:key', getGroceries)
router.post('/', createGrocery)
router.patch('/:id', updateGrocery)
router.delete('/:key/:id', deleteGrocery)
router.delete('/:key', deleteAllGroceries)

export default router