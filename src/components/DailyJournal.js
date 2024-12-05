import React, { useState } from "react";

const DailyJournal = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const addEntry = () => {
    if (entry) {
      setEntries([...entries, { text: entry, date: new Date().toLocaleString() }]);
      setEntry("");
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Daily Journal</h5>
        <ul className="list-group mb-3">
          {entries.map((item, index) => (
            <li className="list-group-item" key={index}>
              <small className="text-muted">{item.date}</small>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Write your journal entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={addEntry}>
          Add Entry
        </button>
      </div>
    </div>
  );
};

export default DailyJournal;
