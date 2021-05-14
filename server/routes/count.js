import express from "express"
import { getGroceriesCount } from "../controllers/groceries.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId', auth, getGroceriesCount)

export default router