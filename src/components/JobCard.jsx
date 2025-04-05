import React from "react";
import { useDispatch } from "react-redux";
import { deleteJob } from "../redux/jobSlice"; // adjust the path if needed

const JobCard = ({ job, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteJob(job.id));
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-indigo-600">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.company}</p>
      <p className="text-sm text-gray-600 mb-2">{job.location}</p>
      <span className="inline-block bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">
        {job.type}
      </span>
      <p className="text-sm text-gray-700 mt-2">{job.description}</p>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
          onClick={() => onEdit(job)}
        >
          Edit
        </button>
        <button
          className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
