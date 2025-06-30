import express from "express";
import { addEvent, getEvents, joinEvent,getUserEvent } from "../controllers/event.controller.js";


const router = express.Router();

router.get("/", getEvents);
router.get("/user/:userId", getUserEvent);
router.post("/add", addEvent);
router.post('/join/:eventId',joinEvent);

export default router;
