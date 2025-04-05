import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setResumeUrl } from "../redux/authSlice"; // ✅ Adjust this if in jobSlice

const ResumeUploader = () => {
  const dispatch = useDispatch();
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    script.onload = () => {
      const cloudinaryWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dxtcvppwt",
          uploadPreset: "job-tracker-resumes",
          multiple: false,
          folder: "resumes",
          resourceType: "auto",
          clientAllowedFormats: ["pdf", "doc", "docx"],
          maxFileSize: 5000000,
        },
        (error, result) => {
          if (!error && result.event === "success") {
            const url = result.info.secure_url;
            console.log("Uploaded File URL:", url);

            setUploadedUrl(url);
            dispatch(setResumeUrl(url)); // ✅ Store in Redux
            setIsUploaded(true);
          }
        }
      );

      document.getElementById("upload-btn").addEventListener("click", () => {
        cloudinaryWidget.open();
      });
    };

    document.body.appendChild(script);
  }, [dispatch]);

  return (
    <div className="text-center space-y-4">
      <button
        id="upload-btn"
        className={`bg-blue-600 text-white px-4 py-2 rounded ${
          isUploaded ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isUploaded}
      >
        {isUploaded ? "Resume Uploaded" : "Upload Resume"}
      </button>

      {uploadedUrl && (
        <div className="text-green-600 text-sm">
          ✅ Uploaded:{" "}
          <a
            href={uploadedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-700"
          >
            View Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
