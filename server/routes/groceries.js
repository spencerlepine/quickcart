import express from "express"
import { getGroceries, createGrocery, updateGrocery, deleteGrocery, deleteAll } from "../controllers/groceries.js"

const router = express.Router();

router.get('/', getGroceries)
router.post('/', createGrocery)
router.patch('/:id', updateGrocery)
router.delete('/:id', deleteGrocery)
router.delete('/', deleteAll)

export default router