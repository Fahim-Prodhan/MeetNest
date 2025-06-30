import express from "express";
import { addEvent, getEvents, joinEvent,getUserEvent, deleteEvent, updateEvent } from "../controllers/event.controller.js";


const router = express.Router();

router.get("/", getEvents);
router.get("/user/:userId", getUserEvent);
router.post("/add", addEvent);
router.post('/join/:eventId',joinEvent);
router.delete('/:id', deleteEvent);
router.put('/:id', updateEvent);


export default router;
