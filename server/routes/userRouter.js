import express from "express"
import { registerUser, loginUser, userLoggedIn, logoutUser } from "../controllers/user.js"

const router = express.Router();

router.post('/', registerUser)
router.get('/loggedIn', userLoggedIn)
router.post('/login', loginUser)
router.get("/logout", logoutUser)


export default router