import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.routes.js";
import chatRoute from "./routes/chat.routes.js";
// import { createUser } from "./seeders/user.js";
dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

// database connection
connectDB(mongoURI);

// createUser(10)

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/user", userRoute);
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
