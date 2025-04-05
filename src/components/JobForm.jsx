import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addJob, updateJob } from "../redux/jobSlice";
import { v4 as uuidv4 } from "uuid";

const JobForm = ({ editingJob, setEditingJob }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    description: "",
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob);
    }
  }, [editingJob]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingJob) {
      dispatch(updateJob(formData));
      setEditingJob(null); // reset
    } else {
      dispatch(addJob({ id: uuidv4(), ...formData }));
    }

    // Clear form after submit
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h3 className="text-xl font-semibold">
        {editingJob ? "Edit Job" : "Add New Job"}
      </h3>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full border rounded p-2"
      >
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>

      <textarea
        name="description"
        placeholder="Job Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border rounded p-2"
      ></textarea>

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {editingJob ? "Update Job" : "Add Job"}
        </button>
        {editingJob && (
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => {
              setEditingJob(null);
              setFormData({
                title: "",
                company: "",
                location: "",
                type: "Full-time",
                description: "",
              });
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default JobForm;
