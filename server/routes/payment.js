import { Router } from "express";
import pay from "../controllers/payment.js";

const router = Router();

router.post("/", pay);

export default router;
