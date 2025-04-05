import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteJob, addJob } from "../redux/jobSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobList = ({ onEdit, searchTerm, jobTypeFilter, onClearAll }) => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleDelete = (id) => {
    dispatch(deleteJob(id));
    toast.success("Job deleted successfully!");
  };

  const handleExport = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(jobs, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "job-list.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("Jobs exported successfully!");
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedJobs = JSON.parse(event.target.result);
        importedJobs.forEach((job) => {
          if (job.id && job.title && job.company) {
            dispatch(addJob(job));
          }
        });
        toast.success("Jobs imported successfully!");
      } catch (error) {
        toast.error("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = jobTypeFilter ? job.type === jobTypeFilter : true;

    return matchesSearch && matchesType;
  });

  return (
    <div className="mt-4 space-y-4">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={onClearAll}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
          >
            Clear All
          </button>
          <button
            onClick={handleExport}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
          >
            Export Jobs
          </button>
          <button
            onClick={handleImportClick}
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
          >
            Import Jobs
          </button>
        </div>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          onChange={handleImport}
          className="hidden"
        />
      </div>

      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500">No matching jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm">{job.location}</p>
              <p className="text-sm italic text-gray-500">{job.type}</p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => onEdit(job)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
