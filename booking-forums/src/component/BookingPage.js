import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    doctor: "",
    location: "Virtual Video Call", // Default value
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingId, setBookingId] = useState(null); // To track booking for payment

  // Fetch available slots for the selected doctor and date
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (selectedDoctor && selectedDate) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/schedule/available?doctor=${selectedDoctor}&date=${selectedDate}`
          );
          const slots = await response.json();
          setAvailableSlots(slots);
        } catch (error) {
          console.error("Error fetching available slots:", error);
        }
      }
    };

    fetchAvailableSlots();
  }, [selectedDoctor, selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Appointment booked successfully!");
        setBookingId(data._id); // Store booking ID for payment
        navigate(`/payment/${data._id}`); // Redirect to payment page with booking ID
      } else {
        alert("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred while booking the appointment.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/5699435/pexels-photo-5699435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        padding: "2rem",
        color: "#243642",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "15px",
          padding: "2rem",
          maxWidth: "1200px",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="row">
          {/* Left Section: Booking Form */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm p-4" style={{ border: "none", backgroundColor: "#E2F1E7" }}>
              <h5 className="card-title mb-4" style={{ color: "#387478" }}>
                Book an Appointment
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{ color: "#243642" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={{
                      backgroundColor: "#E2F1E7",
                      borderColor: "#387478",
                      color: "#243642",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="doctor" className="form-label" style={{ color: "#243642" }}>
                    Doctor
                  </label>
                  <select
                    className="form-select"
                    id="doctor"
                    value={selectedDoctor}
                    onChange={(e) => {
                      setSelectedDoctor(e.target.value);
                      setForm({ ...form, doctor: e.target.value });
                    }}
                    required
                    style={{
                      backgroundColor: "#E2F1E7",
                      borderColor: "#387478",
                      color: "#243642",
                    }}
                  >
                    <option value="">Select a doctor</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. John">Dr. John</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label" style={{ color: "#243642" }}>
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setForm({ ...form, date: e.target.value });
                    }}
                    required
                    style={{
                      backgroundColor: "#E2F1E7",
                      borderColor: "#387478",
                      color: "#243642",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label" style={{ color: "#243642" }}>
                    Available Time Slots
                  </label>
                  <select
                    className="form-select"
                    id="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    disabled={!availableSlots.length} // Disable if no available slots
                    required
                    style={{
                      backgroundColor: "#E2F1E7",
                      borderColor: "#387478",
                      color: "#243642",
                    }}
                  >
                    <option value="">Select a time slot</option>
                    {availableSlots.map((slot, index) => (
                      <option key={index} value={slot.time}>
                        {slot.time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label" style={{ color: "#243642" }}>
                    Location
                  </label>
                  <select
                    className="form-select"
                    id="location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    required
                    style={{
                      backgroundColor: "#E2F1E7",
                      borderColor: "#387478",
                      color: "#243642",
                    }}
                  >
                    <option value="Virtual Video Call">Virtual Video Call</option>
                    <option value="In-Person Meetup">In-Person Meetup</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    backgroundColor: "#387478",
                    color: "#E2F1E7",
                    border: "none",
                    padding: "0.8rem",
                  }}
                  disabled={!form.time} // Disable submit if no time is selected
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>

          {/* Right Section: Doctor's Schedule */}
          <div className="col-md-6">
            <div
              className="card shadow-sm p-4"
              style={{ backgroundColor: "#E2F1E7", border: "none", height: "100%" }}
            >
              <h5 className="card-title mb-4" style={{ color: "#387478" }}>
                Doctor's Availability
              </h5>
              {availableSlots.length > 0 ? (
                <ul className="list-group">
                  {availableSlots.map((slot, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      style={{
                        backgroundColor: "#E2F1E7",
                        color: "#243642",
                        borderColor: "#387478",
                      }}
                    >
                      {slot.time}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: "#243642" }}>No available slots. Select a doctor and date.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;