import { Router } from "express";
import { getSignIn, getSignUp, postSignIn, postSignUp } from "../controller/userController";
const router = Router()
router.get("/register", getSignUp)
router.get("/login", getSignIn)
router.post("/register", postSignUp)
router.post("/login", postSignIn)
export default router