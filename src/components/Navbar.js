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
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#243642",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: "24px",
            color: "#E2F1E7",
          }}
        >
          Mental Wellness
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" style={{ color: "#E2F1E7" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/dashboard"
                style={{ color: "#E2F1E7", marginRight: "15px" }}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/appointments"
                style={{ color: "#E2F1E7", marginRight: "15px" }}
              >
                My Appointments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/profile"
                style={{ color: "#E2F1E7", marginRight: "15px" }}
              >
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn"
                style={{
                  backgroundColor: "#387478",
                  color: "#E2F1E7",
                  border: "none",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
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
