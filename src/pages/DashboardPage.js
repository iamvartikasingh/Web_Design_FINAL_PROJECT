import React from "react";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#E2F1E7",
        minHeight: "100vh",
        margin: "0",
        padding: "40px", // Add padding around the entire page
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
