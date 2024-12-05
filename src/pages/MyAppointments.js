import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2024-12-05", time: "10:00 AM", doctor: "Dr. Smith", status: "Confirmed" },
    { id: 2, date: "2024-12-10", time: "02:00 PM", doctor: "Dr. Johnson", status: "Pending" },
    { id: 3, date: "2024-12-15", time: "01:00 PM", doctor: "Dr. Adams", status: "Completed" },
  ]);

  const [newAppointment, setNewAppointment] = useState({ date: "", time: "", doctor: "", status: "Pending" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddAppointment = () => {
    if (newAppointment.date && newAppointment.time && newAppointment.doctor) {
      setAppointments([
        ...appointments,
        { id: Date.now(), ...newAppointment },
      ]);
      setNewAppointment({ date: "", time: "", doctor: "", status: "Pending" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleEditAppointment = (id) => {
    const appointmentToEdit = appointments.find((appt) => appt.id === id);
    setCurrentAppointment(appointmentToEdit);
    setNewAppointment(appointmentToEdit);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === currentAppointment.id ? { ...appt, ...newAppointment } : appt
      )
    );
    setNewAppointment({ date: "", time: "", doctor: "", status: "Pending" });
    setCurrentAppointment(null);
    setIsEditing(false);
  };

  const handleCancelAppointment = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments(appointments.filter((appt) => appt.id !== id));
    }
  };

  const handleShowDetails = (appointment) => {
    setCurrentAppointment(appointment);
    setShowDetails(true);
  };

  const handleCloseDetails = () => setShowDetails(false);

  // Pagination Logic
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        backgroundColor: "#E2F1E7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          height: "80vh",
        }}
      >
        {/* Current Appointments */}
        <div
          className="rounded shadow p-4"
          style={{
            backgroundColor: "#387478",
            color: "#E2F1E7",
            width: "30%",
            height: "100%",
            overflow: "auto",
          }}
        >
          <h4 className="mb-3">Current Appointments</h4>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by doctor, date, or status"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {currentAppointments.length > 0 ? (
            <ul className="list-group">
              {currentAppointments.map((appt) => (
                <li
                  key={appt.id}
                  className="mb-3 rounded d-flex justify-content-between align-items-center p-3"
                  style={{
                    backgroundColor: "#243642",
                    color: "#E2F1E7",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <FaCalendarAlt className="me-2" />
                    <strong>Date:</strong> {appt.date} <br />
                    <FaClock className="me-2" />
                    <strong>Time:</strong> {appt.time} <br />
                    <FaUserMd className="me-2" />
                    <strong>Doctor:</strong> {appt.doctor} <br />
                    <strong>Status:</strong>{" "}
                    <span
                      className={`badge ${
                        appt.status === "Confirmed"
                          ? "bg-success"
                          : appt.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-light me-2"
                      onClick={() => handleShowDetails(appt)}
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light me-2"
                      onClick={() => handleEditAppointment(appt.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleCancelAppointment(appt.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointments scheduled.</p>
          )}
          {/* Pagination */}
          <div className="d-flex justify-content-center mt-3">
            {Array.from({
              length: Math.ceil(appointments.length / appointmentsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`btn ${
                  currentPage === index + 1
                    ? "btn-primary"
                    : "btn-outline-primary"
                } mx-1`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Add New Appointment */}
        <div
          className="rounded shadow p-4"
          style={{
            backgroundColor: "#629584",
            color: "#243642",
            width: "30%",
            height: "100%",
            overflow: "auto",
          }}
        >
          <h4 className="mb-3">{isEditing ? "Edit Appointment" : "Add New Appointment"}</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              isEditing ? handleSaveEdit() : handleAddAppointment();
            }}
          >
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={newAppointment.date}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, date: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input
                type="time"
                className="form-control"
                id="time"
                value={newAppointment.time}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, time: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="doctor" className="form-label">
                Doctor
              </label>
              <input
                type="text"
                className="form-control"
                id="doctor"
                placeholder="Doctor's Name"
                value={newAppointment.doctor}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, doctor: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-light me-2">
              {isEditing ? "Save Changes" : "Add Appointment"}
            </button>
            {isEditing && (
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                  setIsEditing(false);
                  setNewAppointment({
                    date: "",
                    time: "",
                    doctor: "",
                    status: "Pending",
                  });
                }}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* Calendar View */}
        <div
          className="rounded shadow p-4"
          style={{
            backgroundColor: "#387478",
            color: "#E2F1E7",
            width: "30%",
            height: "100%",
          }}
        >
          <h4 className="mb-3">Calendar View</h4>
          <Calendar
            tileClassName={({ date }) =>
              appointments.some(
                (appt) => new Date(appt.date).toDateString() === date.toDateString()
              )
                ? "highlight"
                : null
            }
            className="rounded"
          />
        </div>
      </div>

      {/* Details Modal */}
      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <FaCalendarAlt className="me-2" />
            <strong>Date:</strong> {currentAppointment?.date}
          </p>
          <p>
            <FaClock className="me-2" />
            <strong>Time:</strong> {currentAppointment?.time}
          </p>
          <p>
            <FaUserMd className="me-2" />
            <strong>Doctor:</strong> {currentAppointment?.doctor}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`badge ${
                currentAppointment?.status === "Confirmed"
                  ? "bg-success"
                  : currentAppointment?.status === "Pending"
                  ? "bg-warning text-dark"
                  : "bg-secondary"
              }`}
            >
              {currentAppointment?.status}
            </span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyAppointments;
