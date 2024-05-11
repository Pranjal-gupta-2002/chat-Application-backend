import express from "express";
import { getMyProfile, login ,newUser,logOut, searchUser} from "../controllers/user.js";
import { multerUploads, singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRoute = express.Router();

userRoute.post("/new",singleAvatar, newUser)
userRoute.post("/login",login)

// only authenticated user can access this routes
userRoute.use(isAuthenticated)

userRoute.get("/me",getMyProfile)
userRoute.get("/search",searchUser)
userRoute.get("/logout",logOut)

export default userRoute;