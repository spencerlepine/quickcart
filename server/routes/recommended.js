import express from "express"
import { getRecommended } from "../controllers/recommended.js"

const router = express.Router();

router.get('/:key', getRecommended)

export default router