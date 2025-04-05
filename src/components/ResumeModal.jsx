import React, { useState } from "react";

const ResumeModal = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading:", file.name);
      // upload logic here
      onClose(); // close modal after upload
    } else {
      alert("Please select a file.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Upload Resume</h2>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
