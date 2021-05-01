import express from "express"
import { verifyUser } from "../controllers/auth.js"

const router = express.Router();

router.get('/:key', verifyUser)

export default router