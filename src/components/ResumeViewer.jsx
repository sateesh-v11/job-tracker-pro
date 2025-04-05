import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResumeUrl } from "../redux/authSlice";

const ResumeViewer = () => {
  const dispatch = useDispatch();
  const resumeUrl = useSelector((state) => state.auth.resumeUrl);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleUpload = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dxtcvppwt", // ✅ Your Cloudinary cloud name
        uploadPreset: "job-tracker-resumes",
        multiple: false,
        folder: "resumes",
        resourceType: "raw", // ✅ More appropriate for documents
        clientAllowedFormats: ["pdf", "doc", "docx"],
        maxFileSize: 5 * 1024 * 1024, // 5 MB
      },
      (error, result) => {
        if (!error && result.event === "success") {
          const url = result.info.secure_url;
          dispatch(setResumeUrl(url));
        } else if (error) {
          console.error("Cloudinary Upload Error:", error);
          alert("Upload failed. Please try again.");
        }
      }
    );
    widget.open();
  };

  const handleDeleteResume = () => {
    dispatch(setResumeUrl(""));
  };

  if (!isLoggedIn) return null;

  return (
    <div className="bg-white shadow-md p-4 mb-6 rounded">
      <h2 className="text-xl font-semibold mb-2">Resume</h2>

      {resumeUrl ? (
        <>
          <div className="mb-4">
            <p className="text-green-600 text-sm mb-2">
              ✅ Resume uploaded:
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-1"
              >
                View in New Tab
              </a>
            </p>

            {resumeUrl.endsWith(".pdf") ? (
              <object
                data={resumeUrl}
                type="application/pdf"
                width="100%"
                height="400"
                className="border rounded"
              >
                <p>
                  PDF preview not supported.{" "}
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Open in new tab
                  </a>
                </p>
              </object>
            ) : (
              <div className="text-sm text-gray-700">
                ⚠️ Unsupported preview format.{" "}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Click to view
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleUpload}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
            >
              Re-upload Resume
            </button>
            <button
              onClick={handleDeleteResume}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
            >
              Delete Resume
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Upload Resume
        </button>
      )}
    </div>
  );
};

export default ResumeViewer;
