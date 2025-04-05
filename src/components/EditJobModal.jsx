import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateJob } from "../redux/jobSlice";
import { toast } from "react-toastify";

const EditJobModal = ({ job, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(job);

  useEffect(() => {
    setFormData(job);
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateJob(formData));
    toast.success("Job updated successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full border p-2 rounded"
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border p-2 rounded"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-2 rounded"
          />
          <input
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Status"
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJobModal;
