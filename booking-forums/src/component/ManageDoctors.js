import React, { useState } from "react";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: "", email: "", specialization: "" });

  // Add a new doctor
  const handleAddDoctor = () => {
    if (newDoctor.name && newDoctor.email && newDoctor.specialization) {
      setDoctors([...doctors, { ...newDoctor, id: Date.now() }]);
      setNewDoctor({ name: "", email: "", specialization: "" });
      alert("Doctor added successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete a doctor
  const handleDeleteDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
    alert("Doctor deleted successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#E2F1E7",
      }}
    >
      {/* Left Section - Form and Table */}
      <div
        style={{
          flex: 3.5, // 80% width
          padding: "4rem",
          backgroundColor: "#FFFFFF",
          borderRight: "2px solid #387478",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#387478", textAlign: "center", marginBottom: "1rem" }}>Manage Doctors</h2>
        <form className="mb-3">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Doctor Name"
                value={newDoctor.name}
                onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                style={{
                  backgroundColor: "#E2F1E7",
                  borderColor: "#387478",
                  color: "#243642",
                }}
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Doctor Email"
                value={newDoctor.email}
                onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
                style={{
                  backgroundColor: "#E2F1E7",
                  borderColor: "#387478",
                  color: "#243642",
                }}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Specialization"
                value={newDoctor.specialization}
                onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                style={{
                  backgroundColor: "#E2F1E7",
                  borderColor: "#387478",
                  color: "#243642",
                }}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleAddDoctor}
            style={{
              backgroundColor: "#387478",
              border: "none",
              color: "#E2F1E7",
              padding: "0.5rem 2rem",
              fontSize: "1rem",
            }}
          >
            Add Doctor
          </button>
        </form>

        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // 3D shadow effect
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#387478",
              color: "#E2F1E7",
              textAlign: "left",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 3D header shadow
            }}
          >
            <tr>
              <th style={{ padding: "1rem" }}>Name</th>
              <th style={{ padding: "1rem" }}>Email</th>
              <th style={{ padding: "1rem" }}>Specialization</th>
              <th style={{ padding: "1rem" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr
                key={doctor.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alternating row colors
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for rows
                  transition: "transform 0.2s", // Hover effect
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{doctor.name}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{doctor.email}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{doctor.specialization}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteDoctor(doctor.id)}
                    style={{
                      backgroundColor: "#629584",
                      border: "none",
                      color: "#E2F1E7",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Section - Image */}
      <div
        style={{
          flex: 1.5, // 20% width
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default ManageDoctors;