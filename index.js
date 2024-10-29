import app from "./app.js";
import dotenv from "dotenv";
import { connectDbs } from "./db.js";

dotenv.config();

//El puerto siempre es mejor usarlo con una variable de entorno, aca usaremos un puerto fijo a modo de ejemplo
const PORT = 5500;

connectDbs();

app.listen(PORT);
console.log("Server on port: " + PORT);
