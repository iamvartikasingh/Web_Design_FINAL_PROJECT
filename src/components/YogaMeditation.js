import React from "react";

const YogaMeditation = () => {
  const sessions = [
    { name: "Morning Yoga", link: "https://www.youtube.com/watch?v=abcd1234" },
    { name: "Mindfulness Meditation", link: "https://www.youtube.com/watch?v=efgh5678" },
    { name: "Stress Relief Yoga", link: "https://www.youtube.com/watch?v=ijkl9101" },
  ];

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Yoga and Meditation</h5>
        <ul className="list-group">
          {sessions.map((session, index) => (
            <li className="list-group-item d-flex align-items-center" key={index}>
              <span className="me-2">&#9658;</span>
              <a href={session.link} target="_blank" rel="noopener noreferrer">
                {session.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YogaMeditation;
