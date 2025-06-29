import express from "express";
import {getUserById, login, logout, signup} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get('/user/:id', getUserById);
router.post("/logout", logout);


export default router;
