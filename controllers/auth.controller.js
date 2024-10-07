import User from "../models/user.model.js";

export const prueba = (req, res) => {
  res.send("El server esta recibiendo peticiones");
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
