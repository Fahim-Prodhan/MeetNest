import React from 'react';

const EventCard = ({ event, onJoin }) => {
  const date = new Date(event.datetime);
  const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;


  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-sm text-gray-600">Posted by: {event.postedBy}</p>
      <p className="text-sm text-gray-600">Date & Time: {formattedDate}</p>
      <p className="text-sm text-gray-600">Location: {event.location}</p>
      <p className="my-2">{event.description}</p>
      <p className="text-sm font-semibold">Attendees: {event.attendeeCount}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => onJoin(event._id)}
      >
        Join Event
      </button>
    </div>
  );
};

export default EventCard;
