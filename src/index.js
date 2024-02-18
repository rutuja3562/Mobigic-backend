const express = require("express");
const connect = require("./config/db");
const app=express();
const cors = require("cors");
app.use(express.json())
app.use(cors())

const port=process.env.PORT||5000

const {register,login, generateToken} = require("./controllers/auth.controller")
const userController = require("./controllers/user.controller")
const fileController = require("./controllers/file.controller")
// const passport = require("./configs/google-oauth")



app.use("/users", userController)

app.use("/upload",fileController)
app.post("/register", register)

app.post("/login", login)


app.listen(port, async () => {
  try {
  await connect();
  console.log("Listening on port 5000")
  } catch (e) {
    console.log(e);
  }
});
