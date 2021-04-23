import express from "express"
import { getReccomended } from "../controllers/reccomended.js"

const router = express.Router();

router.get('/', getReccomended)

export default router