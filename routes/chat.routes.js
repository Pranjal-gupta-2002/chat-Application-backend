import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { newGroupChat,getMyChat } from "../controllers/chat.js";

const chatRoute = express.Router();


// only authenticated user can access this routes


chatRoute.use(isAuthenticated)

chatRoute.post("/new",newGroupChat)
chatRoute.get("/getmychat",getMyChat)

export default chatRoute;