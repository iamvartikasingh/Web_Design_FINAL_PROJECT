import React from "react";
import { Link } from "react-router-dom";

const AppointmentScheduler = () => {
  return (
    <div
      className="rounded shadow p-4"
      style={{
        backgroundColor: "#629584",
        color: "#243642",
        minHeight: "300px",
      }}
    >
      <h5 className="fw-bold mb-3">My Appointments</h5>
      <p>
        <strong>Upcoming Appointment:</strong> <br />
        <span>Date: 12th Dec 2024</span> <br />
        <span>Time: 10:00 AM</span> <br />
        <span>Doctor: Dr. Sarah Taylor</span>
      </p>
      <Link to="/appointments" className="btn btn-light">
        Manage Appointments
      </Link>
    </div>
  );
};

export default AppointmentScheduler;
