import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import baseUrl from "../../../service/baseUrl";
import { useAuthContext } from "../../../context/authContext";

const AddEvent = () => {
  const [loading, setLoading] = useState(false);
  const {authUser} = useAuthContext();

  const getMinDateTime = () => {
    const now = new Date();
    now.setSeconds(0, 0);
    return now.toISOString().slice(0, 16);
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userId = JSON.parse(localStorage.getItem("UID"));

    const form = e.target;
    const eventData = {
      title: form.title.value,
      postedBy: form.postedBy.value,
      datetime: form.datetime.value,
      location: form.location.value,
      description: form.description.value,
      userId,
    };

    try {
      const res = await axios.post(`${baseUrl}/api/events/add`, eventData, {
        withCredentials: true,
      });
      if (res.status == 201) {
        toast.success("Event added successfully!");
        form.reset();
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-md px-8 md:px-24 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Event</h2>
      <form onSubmit={handleAddEvent} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Event Title</label>
          <input name="title" type="text" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input defaultValue={authUser?.name} name="postedBy" type="text" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="block font-semibold mb-1">Date & Time</label>
          <input
            name="datetime"
            type="datetime-local"
            className="input input-bordered w-full"
            required
            min={getMinDateTime()}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input name="location" type="text" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea name="description" className="textarea textarea-bordered w-full" rows="4" required></textarea>
        </div>

        <div>
          <button type="submit" className="btn bg-[#FF6D60] text-white w-full" disabled={loading}>
            {loading ? <span className="loading loading-spinner text-white" /> : "Add Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
