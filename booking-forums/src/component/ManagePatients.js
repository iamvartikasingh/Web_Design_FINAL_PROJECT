import React, { useState } from "react";

const ManagePatients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", contact: "1234567890", doctor: "" },
    { id: 2, name: "Bob", email: "bob@example.com", contact: "0987654321", doctor: "" },
  ]);
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. John" },
    { id: 2, name: "Dr. Smith" },
  ]);

  const handleAssignDoctor = (patientId, doctorId) => {
    setPatients(
      patients.map((patient) =>
        patient.id === patientId ? { ...patient, doctor: doctors.find((doc) => doc.id === doctorId).name } : patient
      )
    );
    alert("Doctor assigned successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#E2F1E7",
      }}
    >
      {/* Left Section - Table */}
      <div
        style={{
          flex: 3, // 75% width
          padding: "2rem",
          backgroundColor: "#FFFFFF",
          borderRight: "2px solid #387478",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#387478", textAlign: "center", marginBottom: "1rem" }}>Manage Patients</h2>
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
              <th style={{ padding: "1rem" }}>Contact</th>
              <th style={{ padding: "1rem" }}>Assigned Doctor</th>
              <th style={{ padding: "1rem" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alternating row colors
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for rows
                  transition: "transform 0.2s", // Hover effect
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{patient.name}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{patient.email}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>{patient.contact}</td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                  {patient.doctor || "Not Assigned"}
                </td>
                <td style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                  <select
                    className="form-select"
                    onChange={(e) => handleAssignDoctor(patient.id, parseInt(e.target.value))}
                    defaultValue=""
                    style={{
                      backgroundColor: "#E2F1E7",
                      borderColor: "#387478",
                      color: "#243642",
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Slight 3D effect on select
                      borderRadius: "5px",
                    }}
                  >
                    <option value="" disabled>
                      Select Doctor
                    </option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Section - Image */}
      <div
        style={{
          flex: 1, // 25% width
          backgroundImage: `url("https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default ManagePatients;