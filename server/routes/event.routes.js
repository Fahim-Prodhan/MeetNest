import express from "express";
import { addEvent, getEvents, joinEvent } from "../controllers/event.controller.js";


const router = express.Router();

router.get("/", getEvents);
router.post("/add", addEvent);
router.post('/join/:eventId',joinEvent);

export default router;
