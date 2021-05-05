import express from "express"
import { getGroceriesCount } from "../controllers/groceries.js"

const router = express.Router();

router.get('/:key/', getGroceriesCount)

export default router