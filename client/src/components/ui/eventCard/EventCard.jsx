import React from 'react';

const EventCard = ({ event, onJoin }) => {
  const date = new Date(event.datetime);
  const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(
    2,
    '0'
  )}:${String(date.getMinutes()).padStart(2, '0')}`;

  return (
    <div className="border border-gray-200 p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
        <p className="text-sm text-gray-500 mb-1">
          📢 Posted by: <span className="font-medium text-gray-700">{event.postedBy}</span>
        </p>
        <p className="text-sm text-gray-500 mb-1">
          📅 Date & Time: <span className="font-medium">{formattedDate}</span>
        </p>
        <p className="text-sm text-gray-500 mb-1">
          📍 Location: <span className="font-medium">{event.location}</span>
        </p>
        <p className="text-gray-700 mt-3 mb-4">{event.description}</p>
        <p className="text-sm font-semibold text-gray-700">
          👥 Attendees: {event.attendeeCount}
        </p>
      </div>
      <button
        className="mt-6 cursor-pointer w-full py-2 bg-[#093fb4dc] text-white font-semibold rounded-lg hover:bg-[#093FB4] transition-colors duration-300"
        onClick={() => onJoin(event._id)}
      >
        Join Event
      </button>
    </div>
  );
};

export default EventCard;