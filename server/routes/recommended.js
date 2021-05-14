import express from "express"
import { getRecommended } from "../controllers/recommended.js"
import auth from "../middleware/auth.js"

const router = express.Router();

router.get('/:userId', auth, getRecommended)

export default router