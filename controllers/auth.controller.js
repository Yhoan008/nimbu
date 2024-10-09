import User from "../models/user.model.js";
import path from "path";
import { fileURLToPath } from "url";

export const consult = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const currentUser = await User.findOne({ username, password });
    if (!currentUser) {
      res.status(200).json({ response: "User not found" });
    } else {
      res.status(200).json(currentUser);
    }
  } catch (error) {
    res.send({ response: error });
  }
};

export const register = async (req, res) => {
  let { username, email, password } = req.body;

  //que pasa cuando el correo ya esta registado

  try {
    const currentUser = await User.findOne({ username: username });

    if (!currentUser) {
      if (!email) {
        res.json({ message: "El correo electronico es obligatorio" });
      } else {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.json({ message: "El usuario has sido registrado" });
      }
    } else {
      res.json({ message: "Ya hay un usuario registrado" });
    }
  } catch (error) {
    res.send(error);
  }
};

export const test = (req, res) => {
  res.send("Server On");
};

export const main = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "./../dist", "index.html");
  res.sendFile(filePath);
};
