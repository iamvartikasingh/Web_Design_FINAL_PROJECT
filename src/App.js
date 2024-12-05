// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";
import PatientReviews from "./components/PatientReviews";
import AppointmentsList from "./components/AppointmentsList";
import UpcomingAppointments from "./components/UpcomingAppointments";
import AnalyticsChat from "./components/AnalyticsChat";

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<AppointmentsList />} />
      <Route path="/upcoming-appointments" element={<UpcomingAppointments />} />
      <Route path="/patients" element={<PatientList />} />
      <Route path="/patient-profile" element={<PatientProfile />} />
      <Route path="/reviews" element={<PatientReviews />} />
      <Route path="/chat" element={<AnalyticsChat />} />
      <Route path="/analytics" element={<AnalyticsChat />} />
    </Routes>
  </Router>
);

export default App;
