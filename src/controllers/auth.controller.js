const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ user }, `${process.env.SECRET_KEY}`);
};
const register = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).send({ message: "Username already Exists" });
    }
    user = await User.create(req.body);
    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send({ messege: err.messege });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("Wrong username or Password");
    }
    const match=user.checkPassword(req.body.password)
    if(!match){
        return res.status(400).send({message : "Wrong username or Password"})
    }
    const token = generateToken(user)
    return res.status(200).send({user, token});

  } catch (e) {
    res.status(400).send({ messege: err.messege });
  }
};
module.exports={register,login,generateToken}