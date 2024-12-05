// Home.js
import React from "react";
import { Container, Card, Row, Col, Table, Button } from "react-bootstrap";
import doctorImage from "../assets/images/doctor.jpg";
import backgroundImage from "../assets/images/background.jpg"; // Import the background image


const Home = () => (
  <div
    className="home-background"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh", // Ensures the background covers the viewport
      padding: "20px",
    }}
  >
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Row>
            <Col md={4} className="d-flex align-items-center">
              <img
                src={doctorImage}
                alt="Doctor"
                className="rounded-circle img-fluid"
              />
            </Col>
            <Col md={8}>
              <h2>Good Morning, Dr. Jessica Linda</h2>
              <p>Psychiatrist, MS, MD, MBBS</p>
              <p>
                You have total <strong>18 appointments</strong> today.
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <h3 className="mt-4">Today's Appointment</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Deena Cooley</td>
            <td>05/23/2024</td>
            <td>9:30 AM</td>
            <td>
              <Button variant="success" size="sm">
                Accept
              </Button>{" "}
              <Button variant="danger" size="sm">
                Decline
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jerry Wilcox</td>
            <td>05/23/2024</td>
            <td>9:45 AM</td>
            <td>
              <Button variant="success" size="sm">
                Accept
              </Button>{" "}
              <Button variant="danger" size="sm">
                Decline
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </div>
);

export default Home;
