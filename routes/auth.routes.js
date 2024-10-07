import { Router } from "express";
import {
  consult,
  register,
  test,
  main,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/test", test);

router.post("/consult", consult);

router.post("/register", register);

router.get("/*", main);

export default router;
