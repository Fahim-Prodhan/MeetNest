import Event from "../models/event.model.js";

export const addEvent = async (req, res) => {
  try {
    const { title, postedBy, datetime, location, description,userId } = req.body;

    if (!title || !postedBy || !datetime || !location || !description || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEvent = new Event({
      title,
      postedBy,
      datetime,
      location,
      description,
      userId
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
