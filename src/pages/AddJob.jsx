import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice"; // Import action

const AddJob = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      company: "",
      location: "",
      salary: "",
      jobType: "full-time",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Job title is required"),
      company: Yup.string().required("Company name is required"),
      location: Yup.string().required("Location is required"),
      salary: Yup.number().required("Salary is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addJob(values)); // Dispatch action to store data
      alert("Job added successfully!");
      resetForm(); // Clear the form
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Job</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded-lg"
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500">{formik.errors.title}</div>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            className="w-full p-2 border rounded-lg"
            {...formik.getFieldProps("company")}
          />
          {formik.touched.company && formik.errors.company && (
            <div className="text-red-500">{formik.errors.company}</div>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            className="w-full p-2 border rounded-lg"
            {...formik.getFieldProps("location")}
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-red-500">{formik.errors.location}</div>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Salary</label>
          <input
            type="number"
            name="salary"
            className="w-full p-2 border rounded-lg"
            {...formik.getFieldProps("salary")}
          />
          {formik.touched.salary && formik.errors.salary && (
            <div className="text-red-500">{formik.errors.salary}</div>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Job Type</label>
          <select
            name="jobType"
            className="w-full p-2 border rounded-lg"
            {...formik.getFieldProps("jobType")}
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;
