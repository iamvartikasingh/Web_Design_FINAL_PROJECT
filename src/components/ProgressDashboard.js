import React from "react";

const ProgressDashboard = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Progress Dashboard</h5>
        <p>Therapy Sessions: 3/10</p>
        <div className="progress mb-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "30%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p>Mindfulness Goals: 5/7</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "71%" }}
            aria-valuenow="71"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
