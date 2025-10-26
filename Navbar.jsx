// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../api/api";

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow">
      <Link to="/" className="font-bold text-xl text-blue-400">
        🌐 Week4 Blog
      </Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <Link
              to="/create"
              className="hover:text-blue-400 transition"
            >
              Create Post
            </Link>
            <button
              onClick={handleLogout}
              className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400 transition">
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-blue-400 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}