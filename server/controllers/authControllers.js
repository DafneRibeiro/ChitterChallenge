import User from "../model/authModel.js";
import jwt from "jsonwebtoken";
import Peeps from '../model/peepSchema.js';

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "TheLagger super secret key", {
    expiresIn: maxAge,
  });
};

// Hugo's help to set this part

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "The credentials are wrong";
  }

  if (err.message === "incorrect password") {
    errors.password = "The credentials are wrong";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const register = async (req, res, next) => {
  try {
    const { name, username, email, password, content } = req.body;
    const user = await User.create({ name, username, email, password, content });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }

 };

 const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true, name: user.name, username:user.username });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }

 };
  
const register1 = async (req, res, next) => {
//  nao mexer mais nisso pra nao quebrar a hora!!!
  const comment = new Peeps({
    name: req.body.name,
    username: req.body.username,
    content: req.body.content,
    createdAt: req.body.createdAt
    });

  try {
        const savedComment = await comment.save();
        const savedCommentWithUserData = await Peeps.findById(savedComment._id);
        res.send(savedCommentWithUserData); 

  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }

 }; 

export  { register, login, register1 }