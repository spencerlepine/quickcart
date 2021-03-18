import express from "express"
import { getGroceries, createGrocery } from "../controllers/groceries.js"
// , updateGrocery, deleteGrocery, likeGrocery } from "../controllers/groceries.js"

const router = express.Router();

router.get('/', getGroceries)
router.post('/', createGrocery)
// router.patch('/:id', updateGrocery)
// router.delete('/:id', deleteGrocery)
// router.patch('/:id/likeGrocery', likeGrocery)

export default router