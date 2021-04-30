import express from "express"
import { displayError, getRecommended } from "../controllers/recommended.js"

const router = express.Router();

router.get('/', displayError)
router.get('/:key', getRecommended)

export default router