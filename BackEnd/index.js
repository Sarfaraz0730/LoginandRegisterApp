import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
// const express = require("express")
const app = express();
 app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

mongoose.connect(
  "mongodb+srv://sarfaraz220720001230:sCZlKeyoNcVfPJIB@cluster0.2w6oqz1.mongodb.net/mernstack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected");
  }
);

//Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String
})
//Model

const User = new mongoose.model("User", userSchema)
//Routes

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({message:"Login Succesful" , user:user})
            } else { 
                  res.send({ message: "Login Failed , password din't match" });
            }
        } else {
            res.send("User not Registered")
        }
    })
})


app.post("/register", (req, res) => {
//   console.log(req.body)
    const { name, email, password } = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({message : "User already register"})
        } else {
            const user = new User({
              name,
              email,
              password,
            });

            user.save((err) => {
              if (err) {
                res.send(err);
              } else {
                res.send({ message: "Successfully Register" });
              }
            });
        }
    })
    
});


app.listen(12345, () => {
    console.log("Listening on Port : 12345")
})