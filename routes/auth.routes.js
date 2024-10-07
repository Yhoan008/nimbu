import { Router } from "express";
import { prueba, register } from "../controllers/auth.controller.js";

const router = Router();

router.get("/", prueba);

router.post("/register", register);

export default router
