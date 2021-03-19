import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery } from "../controllers/groceries.js"

const router = express.Router();

router.get('/', getGroceries)
router.post('/', createGrocery)
router.patch('/:id', updateGrocery)
router.delete('/:id', deleteGrocery)

export default router