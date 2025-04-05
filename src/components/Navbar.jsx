import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Job Tracker Pro</h1>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hover:underline"
          >
            Upload Resume
          </button>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="ml-2 bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {(isLoggedIn && isModalOpen) && (
        <ResumeModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
