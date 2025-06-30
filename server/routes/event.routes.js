import express from "express";
import { addEvent, getEvents, joinEvent,getUserEvent, deleteEvent, updateEvent,getHomeEvents } from "../controllers/event.controller.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/", protectRoute, getEvents);
router.get("/home", getHomeEvents);
router.get("/user/:userId",protectRoute, getUserEvent);
router.post("/add",protectRoute, addEvent);
router.post('/join/:eventId',protectRoute, joinEvent);
router.delete('/:id',protectRoute, deleteEvent);
router.put('/:id',protectRoute, updateEvent);


export default router;
