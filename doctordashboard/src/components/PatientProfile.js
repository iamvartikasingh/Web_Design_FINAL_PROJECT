import React from "react";
import { Container, Card } from "react-bootstrap";
import personImage from "../assets/images/person.jpg";

const PatientProfile = () => (
  <div style={{ backgroundColor: "#f0fffb", minHeight: "100vh" }}>
    <Container
      fluid
      className="mt-4"
      style={{ display: "flex", flexDirection: "row", height: "100vh" }}
    >
      {/* Left Section with Image */}
      <Card
        style={{
          flex: 1,
          margin: "0 10px",
          backgroundImage: `url(${personImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Optional overlay or text on image */}
      </Card>

      {/* Right Section with Details */}
      <Card
        style={{
          flex: 1,
          margin: "0 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "f0fffb",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>Jessica Alexander</h3>
          <p><strong>Age:</strong> 29</p>
<p><strong>Occupation:</strong> Engineer</p>
<p><strong>Contact:</strong> +1 (404) 337-7257</p>
<p>
  <strong>Mental Health Condition:</strong> Excessive worry and fears, 
  sometimes without a clear reason.
</p>
<p><strong>Doctor Appointed:</strong> Dr. Jessica Linda</p>
<p><strong>Last Appointment Date:</strong> May 23, 2024</p>

        </div>
      </Card>
    </Container>
  </div>
);

export default PatientProfile;
