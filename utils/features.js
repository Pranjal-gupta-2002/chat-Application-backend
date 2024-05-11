import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 24 * 7,
  httpOnly: true,
  sameSite: "none",
  secure: true,
};

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chat-App" })
    .then((data) => {
      console.log(`Connected to MongoDB ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return res.status(code).cookie("token", token, cookieOptions).json({
    success: true,
    message,
    user,
  });
};

const emitEvent = (req,event,users,data)=>{
  console.log("Emitting event",event)
}

export { connectDB, sendToken ,emitEvent};
