import React, { useState } from "react";

const MedicationReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState("");

  const addReminder = () => {
    if (reminder) {
      setReminders([...reminders, reminder]);
      setReminder("");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Medication Reminder</h5>
        <ul className="list-group mb-3">
          {reminders.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Add a new reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addReminder}>
          Add Reminder
        </button>
      </div>
    </div>
  );
};

export default MedicationReminder;
