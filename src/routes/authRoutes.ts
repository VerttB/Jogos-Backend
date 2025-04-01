import { Router } from "express";
import { getSignIn, getSignUp, postSignIn, postSignUp, getLogout } from "../controller/authController";
const authRouter = Router()
authRouter.get("/register", getSignUp)
authRouter.get("/login", getSignIn)
authRouter.post("/register", postSignUp)
authRouter.post("/login", postSignIn)
authRouter.get("/logout", getLogout)
export default authRouter