import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookingPage from "./component/BookingPage";
import AdminPanel from "./component/AdminPanel";
import ManageDoctors from "./component/ManageDoctors";
import ManagePatients from "./component/ManagePatients";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        {/* Navigation Bar */}
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            backgroundColor: "#243642", // Custom Navbar Color
            color: "#E2F1E7",
            padding: "15px"
          }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand fw-bold"
              to="/admin"
              style={{ color: "#E2F1E7" }} // Text Color
            >
              MentalWellness
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/admin/manage-doctors"
                    style={{ color: "#E2F1E7" }}
                  >
                    Manage Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/admin/manage-patients"
                    style={{ color: "#E2F1E7" }}
                  >
                    Manage Patients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/bookings"
                    style={{ color: "#E2F1E7" }}
                  >
                    Bookings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/manage-doctors" element={<ManageDoctors />} />
          <Route path="/admin/manage-patients" element={<ManagePatients />} />
          <Route path="/bookings" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;