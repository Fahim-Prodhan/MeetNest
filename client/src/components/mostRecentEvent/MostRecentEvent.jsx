import React, { useEffect, useState } from 'react';
import baseUrl from '../../service/baseUrl';
import { useAuthContext } from '../../context/authContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import EventCard from '../ui/eventCard/EventCard';

const MostRecentEvent = () => {

    const [events, setEvents] = useState([]);
    const { authUser } = useAuthContext();

    const handleJoin = async (eventId) => {
        const userId = authUser?._id;

        try {
            await axios.post(`${baseUrl}/api/events/join/${eventId}`, { userId },{withCredentials:true});
            toast.success('Successfully joined the event');
            fetchEvents();
        } catch {
            // toast.error(error.response?.data?.message || 'Failed to join event');
            return window.location.href = '/login'
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const res = await axios.get(`${baseUrl}/api/events/home`);
        setEvents(res.data);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">Most Recent Events</h1>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {events.slice(0, 6).map((event) => (
                    <EventCard key={event._id} event={event} onJoin={handleJoin} />
                ))}
            </div>
        </div>

    );
};

export default MostRecentEvent;