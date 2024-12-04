import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="py-5"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1920x800/?mental-health,therapy')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">You are not alone, we are always together</h1>
          <p className="lead">
            Relax, none of this is your fault. Don’t stop. What you’re afraid of won’t happen.
          </p>
          <div className="mt-4">
            <Link to="/appointments" className="btn btn-primary btn-lg me-3">
              Book an Appointment
            </Link>
            <Link to="/dashboard" className="btn btn-outline-light btn-lg">
              Explore Categories
            </Link>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">Our Achievements</h2>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://source.unsplash.com/400x300/?teamwork,success"
                alt="Achievements"
                className="img-fluid mb-3"
                style={{ borderRadius: "10px" }}
              />
              <h3 className="display-5 fw-bold">12k+</h3>
              <p>Cases Handled</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://source.unsplash.com/400x300/?rating,review"
                alt="Ratings"
                className="img-fluid mb-3"
                style={{ borderRadius: "10px" }}
              />
              <h3 className="display-5 fw-bold">4.9</h3>
              <p>Rating from 12k+ People</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://source.unsplash.com/400x300/?experience,people"
                alt="Experience"
                className="img-fluid mb-3"
                style={{ borderRadius: "10px" }}
              />
              <h3 className="display-5 fw-bold">10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0">
                <img
                  src="https://source.unsplash.com/400x300/?therapy,counseling"
                  className="card-img-top"
                  alt="Psychotherapy"
                  style={{ borderRadius: "10px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Psychotherapy</h5>
                  <p className="card-text">Evidence-based therapeutic intervention for mental health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0">
                <img
                  src="https://source.unsplash.com/400x300/?collaboration,team"
                  className="card-img-top"
                  alt="Supervision"
                  style={{ borderRadius: "10px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Supervision</h5>
                  <p className="card-text">Expert supervision for better mental health outcomes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0">
                <img
                  src="https://source.unsplash.com/400x300/?education,books"
                  className="card-img-top"
                  alt="Psychoeducation"
                  style={{ borderRadius: "10px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Psychoeducation</h5>
                  <p className="card-text">
                    Educating patients to manage their mental health effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-5 text-center" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <blockquote className="blockquote">
            <img
              src="https://source.unsplash.com/400x300/?motivation,hope"
              alt="Quote"
              className="img-fluid mb-4"
              style={{ borderRadius: "10px" }}
            />
            <p className="mb-4">
              “But, in the end, a person needs more courage to live than to kill himself. Asking for help is not a sign
              of weakness. It is a sign of strength.”
            </p>
            <footer className="blockquote-footer">Anonymous</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-white" style={{ backgroundColor: "#333" }}>
        <div className="container text-center">
          <p>Patient Portal - © 2024 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
