import app from "./app.js";
import path from "path";
import dotenv from "dotenv";
import { connectDbs } from "./db.js";

dotenv.config();
const PORT = process.env.PORT || 5500;

connectDbs();

app.listen(PORT);
console.log("Server on port: " + PORT);
