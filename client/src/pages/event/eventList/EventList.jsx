import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import EventCard from '../../../components/ui/eventCard/EventCard';
import baseUrl from '../../../service/baseUrl';
import { useAuthContext } from '../../../context/authContext';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const { authUser } = useAuthContext();

  useEffect(() => {
    fetchEvents();
  }, [search, filter, selectedDate]);

  const fetchEvents = async () => {
    const res = await axios.get(`${baseUrl}/api/events`, {
      params: {
        search,
        filter,
        selectedDate: filter === 'date' ? selectedDate : undefined,
      },
    });
    setEvents(res.data);
  };

  const handleJoin = async (eventId) => {
    const userId = authUser?._id;
  
    try {
      await axios.post(`${baseUrl}/api/events/join/${eventId}`, { userId });
      toast.success('Successfully joined the event');
      fetchEvents();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to join event');
    }
  };

  const clearFilters = () => {
    setSearch('');
    setFilter('');
    setSelectedDate('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-start flex-wrap">
        <input
          className="border px-3 py-2 rounded w-full sm:w-1/4"
          type="text"
          placeholder="Search events by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="date"
          className="border px-3 py-2 rounded w-full sm:w-[180px]"
          value={selectedDate}
          onChange={(e) => {
            setFilter('date');
            setSelectedDate(e.target.value);
          }}
        />

        <select
          className="border px-3 py-2 rounded w-full sm:w-[180px]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option disabled value="">Select a date range</option>
          <option value="this-week">Current Week</option>
          <option value="last-week">Last Week</option>
          <option value="this-month">Current Month</option>
          <option value="last-month">Last Month</option>
        </select>

        <button
          onClick={clearFilters}
          className="flex items-center gap-1 px-4 py-2 bg-[#ed330027] text-[#ED3500] rounded"
        >
          Clear Filter
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event._id} event={event} onJoin={handleJoin} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
