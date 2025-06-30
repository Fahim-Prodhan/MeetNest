import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import baseUrl from '../../../service/baseUrl';

const EventUpdateModal = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    title: event.title,
    postedBy: event.postedBy,
    datetime: event.datetime.slice(0, 16),
    location: event.location,
    description: event.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseUrl}/api/events/${event._id}`, formData);
      toast.success('Event updated successfully!');
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update event');
    }
  };

  return (
    <div className="fixed inset-0 bg-[#33333364] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Update Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              name="title"
              type="text"
              className="input input-bordered w-full"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Posted By</label>
            <input
              name="postedBy"
              type="text"
              className="input input-bordered w-full"
              value={formData.postedBy}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Date & Time</label>
            <input
              name="datetime"
              type="datetime-local"
              className="input input-bordered w-full"
              value={formData.datetime}
              onChange={handleChange}
              required
              min={new Date().toISOString().slice(0, 16)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              name="location"
              type="text"
              className="input input-bordered w-full"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventUpdateModal;
