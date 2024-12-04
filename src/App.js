import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  );
};

export default App;
