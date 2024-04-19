
import { User } from "../models/user.js";


const newUser = async(req, res) => {
    const avatar = {
        public_id:"public_id",
        url:"url"
    }
    await User.create({
        name:"Abhay",
        username:"Abhay8269",
        password:"123",
    });
    res.status(201).json({
        Message:"user created successfully"
    })
};
const login = (req, res) => {
  res.send("login");
};

export {login,newUser}