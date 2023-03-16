import { Router } from "express";
import pay from "../controllers/test.js";

const router = Router();

router.post("/", pay);

export default router;
