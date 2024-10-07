import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));

app.use(authRoutes);

export default app;
