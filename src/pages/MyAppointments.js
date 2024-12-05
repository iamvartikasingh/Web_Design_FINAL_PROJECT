import React, { useState } from "react";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([
    { date: "2024-12-05", time: "10:00 AM", doctor: "Dr. Smith" },
    { date: "2024-12-10", time: "02:00 PM", doctor: "Dr. Johnson" },
  ]);

  return (
    <div className="container py-4">
      <h2>My Appointments</h2>
      <ul className="list-group">
        {appointments.map((appt, index) => (
          <li className="list-group-item" key={index}>
            <strong>Date:</strong> {appt.date}, <strong>Time:</strong> {appt.time},{" "}
            <strong>Doctor:</strong> {appt.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;
