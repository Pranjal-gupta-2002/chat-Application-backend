import express from "express";
import { login ,newUser} from "../controllers/user.js";

const userRoute = express.Router();

userRoute.post("/new", newUser)
userRoute.post("/login",login)

export default userRoute;