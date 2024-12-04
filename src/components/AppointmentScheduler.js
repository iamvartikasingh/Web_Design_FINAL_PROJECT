import React, { useState } from "react";

const AppointmentScheduler = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSchedule = () => {
    if (date && time) {
      alert(`Appointment scheduled for ${date} at ${time}`);
    } else {
      alert("Please select both a date and time.");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Appointment Scheduler</h5>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Pick a Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Pick a Time</label>
          <input
            type="time"
            id="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSchedule}>
          Schedule Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
