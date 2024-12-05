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
    <div className="container my-5">
      <div className="row">
        {/* Left Section: Booking Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4">
            <h5 className="card-title mb-4">Book an Appointment</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="doctor" className="form-label">
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
                >
                  <option value="">Select a doctor</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Dr. John">Dr. John</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
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
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">
                  Available Time Slots
                </label>
                <select
                  className="form-select"
                  id="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  disabled={!availableSlots.length} // Disable if no available slots
                  required
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
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <select
                  className="form-select"
                  id="location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  required
                >
                  <option value="Virtual Video Call">Virtual Video Call</option>
                  <option value="In-Person Meetup">In-Person Meetup</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={!form.time} // Disable submit if no time is selected
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Right Section: Doctor's Schedule */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h5 className="card-title mb-4">Doctor's Availability</h5>
            {availableSlots.length > 0 ? (
              <ul className="list-group">
                {availableSlots.map((slot, index) => (
                  <li key={index} className="list-group-item">
                    {slot.time}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No available slots. Select a doctor and date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;