import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import baseUrl from '../../../service/baseUrl';
import EventUpdateModal from '../../../components/ui/eventUpdateModal/EventUpdateModal';
import { useAuthContext } from '../../../context/authContext';

const MyEvents = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const { authUser } = useAuthContext();

    const fetchEvents = async () => {
        try {
            const userId = authUser?._id
            if(userId){
                const res = await axios.get(`${baseUrl}/api/events/user/${userId}`);
                console.log(res);
                setEvents(res.data);
            }
        } catch (err) {
            toast.error("Failed to fetch events");
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [authUser]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/events/${id}`);
            toast.success('Event deleted');
            fetchEvents();
        } catch (err) {
            toast.error("Failed to delete event");
        }
    };

    const handleUpdate = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map(event => {
                const date = new Date(event.datetime);
                const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(
                    date.getMonth() + 1
                ).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(
                    2,
                    '0'
                )}:${String(date.getMinutes()).padStart(2, '0')}`;

                return (
                    <div
                        key={event._id}
                        className="border border-gray-200 p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
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
                        <div className="flex gap-2 mt-6">
                            <button
                                onClick={() => handleUpdate(event)}
                                className="w-full py-2 text-blue-600 border border-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors duration-300"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(event._id)}
                                className="w-full py-2 text-red-600 border border-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
            {showModal && selectedEvent && (
                <EventUpdateModal
                    event={selectedEvent}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedEvent(null);
                        fetchEvents();
                    }}
                />
            )}
        </div>
    );
};

export default MyEvents;
