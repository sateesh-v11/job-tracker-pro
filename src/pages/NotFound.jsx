import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg mb-4">Oops! Page not found.</p>
        <Link
          to="/"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
