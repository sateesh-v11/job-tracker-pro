import React, { useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import { useDispatch } from "react-redux";
import { clearJobs } from "../redux/jobSlice";

const Dashboard = () => {
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  const dispatch = useDispatch();

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleClearAll = () => {
    dispatch(clearJobs());
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Job Tracker Pro</h1>

      <JobForm editingJob={editingJob} setEditingJob={setEditingJob} />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 mt-6">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/2"
        />
        <select
          value={jobTypeFilter}
          onChange={(e) => setJobTypeFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/4"
        >
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <JobList
        onEdit={handleEdit}
        searchTerm={searchTerm}
        jobTypeFilter={jobTypeFilter}
        onClearAll={handleClearAll}
      />
    </div>
  );
};

export default Dashboard;
