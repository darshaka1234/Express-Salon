import { Router } from "express";
import allServices from "../controllers/service.js";

const router = Router();

router.get("/", allServices);

export default router;
