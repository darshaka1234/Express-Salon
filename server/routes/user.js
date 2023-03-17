import { Router } from "express";
import { allUsers, Booking, login, register } from "../controllers/user.js";

const router = Router();

router.get("/", allUsers);
router.post("/register", register);
router.post("/login", login);
router.put("/booking", Booking);

export default router;
