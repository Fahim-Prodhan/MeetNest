import Event from "../models/event.model.js";

export const addEvent = async (req, res) => {
  try {
    const { title, postedBy, datetime, location, description, userId } = req.body;

    if (!title || !postedBy || !datetime || !location || !description || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEvent = new Event({
      title,
      postedBy,
      datetime,
      location,
      description,
      userId,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getEvents = async (req, res) => {
  const { search = '', filter = '', selectedDate } = req.query;
  const query = {};

  // 🔍 Search by title
  if (search) {
    query.title = { $regex: search, $options: 'i' };
  }

  const startOf = (d) => new Date(d.setHours(0, 0, 0, 0));
  const endOf = (d) => new Date(d.setHours(23, 59, 59, 999));
  const now = new Date();

  // 📅 Date filtering
  if (selectedDate) {
    const selected = new Date(selectedDate);
    query.datetime = {
      $gte: startOf(new Date(selected)),
      $lte: endOf(new Date(selected))
    };
  } else {
    switch (filter) {
      case 'this-week': {
        const first = new Date(now.setDate(now.getDate() - now.getDay()));
        const last = new Date(now.setDate(first.getDate() + 6));
        query.datetime = { $gte: startOf(first), $lte: endOf(last) };
        break;
      }
      case 'last-week': {
        const first = new Date(now.setDate(now.getDate() - now.getDay() - 7));
        const last = new Date(now.setDate(first.getDate() + 6));
        query.datetime = { $gte: startOf(first), $lte: endOf(last) };
        break;
      }
      case 'this-month': {
        const first = new Date(now.getFullYear(), now.getMonth(), 1);
        const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        query.datetime = { $gte: startOf(first), $lte: endOf(last) };
        break;
      }
      case 'last-month': {
        const first = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const last = new Date(now.getFullYear(), now.getMonth(), 0);
        query.datetime = { $gte: startOf(first), $lte: endOf(last) };
        break;
      }
    }
  }

  const events = await Event.find(query).sort({ datetime: 1 });
  res.json(events);
};


export const joinEvent = async (req, res) => {
  const { eventId } = req.params;
  const { userId } = req.body;


  const event = await Event.findById(eventId);
  
  if (!event) return res.status(404).json({ message: 'Event not found' });

  if (event.joinedUsers.includes(userId)) {
    return res.status(400).json({ message: 'Already joined' });
  }

  event.attendeeCount += 1;
  event.joinedUsers.push(userId);
  await event.save();

  res.json({ message: 'Joined successfully' });
};

export const getUserEvent =async (req,res)=>{
  const {userId} = req.params;

  try {
    const events = await Event.find({userId}).sort({datetime:1})
    console.log(events);  
    res.status(200).json(events)
  } catch (error) {
    return res.status(400).json("Something is went wrong!")
  }
}