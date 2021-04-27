import express from "express"
import { getReccomended } from "../controllers/reccomended.js"

const router = express.Router();

router.get('/:key', getReccomended)

export default router