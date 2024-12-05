import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserCreation from './components/UserCreation';
import Login from './components/login';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AccordionSection from './components/AccordionSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ModalSection from './components/ModalSection';

const App = () => {
  // Check if the user is authenticated and get the role from localStorage
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // Admin, Doctor, or Patient

  // Determine the landing page based on the role
  const getLandingPage = () => {
    if (userRole === 'admin') {
      return <Navigate to="#admin-landing" />;
    } else if (userRole === 'doctor') {
      return <Navigate to="#doctor-landing" />;
    } else if (userRole === 'patient') {
      return <Navigate to="#patient-landing" />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      {/* Navigation bar is always visible */}
      <Navbar />

      <Routes>
        {/* Route for the homepage */}
        <Route
          path="/"
          element={
            <div style={{ backgroundColor: 'rgb(234, 248, 255)', color: '#8EACCD' }}>
              <Carousel />
              <AccordionSection />
              <TestimonialCarousel />
              <ModalSection />
            </div>
          }
        />

        {/* Route for user creation */}
        <Route path="/user-creation" element={<UserCreation />} />

        {/* Route for login */}
        <Route path="/login" element={<Login />} />

        {/* Landing page after login based on user role */}
        <Route path="/landing" element={isAuthenticated ? getLandingPage() : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
