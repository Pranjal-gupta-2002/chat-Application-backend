import mongoose from "mongoose"

const connectDB = (uri)=>{
    mongoose
    .connect(uri, { dbName: "Chat-App" })
    .then(() => {
      console.log("Connected to MongoDB hii");
    })
    .catch((res) => {
      throw err
    });
}