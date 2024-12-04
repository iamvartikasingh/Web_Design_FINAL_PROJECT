import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions, then navigate to the landing page
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "24px" }}>
          Patient Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/appointments">
                My Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/profile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger fw-bold"
                style={{ marginLeft: "10px" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
