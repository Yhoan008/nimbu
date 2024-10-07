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
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send("El usuario has sido registrado");
  } catch (error) {
    res.send("No se ha podido registrar el usuario");
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
