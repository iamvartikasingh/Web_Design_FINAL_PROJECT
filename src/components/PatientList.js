import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import patientImage from "../assets/images/patient.jpeg"; // Adjust the path if necessary

const PatientList = () => (
  <div style={styles.layout}>
    <div style={styles.listSection}>
      <Container>
        <h2>Patient List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jessica Alexander</td>
              <td>29</td>
              <td>
                <Link to="/patient-profile">
                  <Button variant="info" size="sm">
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
    <div style={styles.imageSection}>
      <img src={patientImage} alt="Patient" style={styles.image} />
    </div>
  </div>
);

const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "75% 25%",
    height: "100vh", // Full viewport height
  },
  listSection: {
    backgroundColor: "#f0fffb", // Background color for the left 75% section
    padding: "20px",
    overflowY: "auto",
  },
  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    overflow: "hidden", // Ensures no overflow
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Makes the image fill the container while maintaining its aspect ratio
  },
};

export default PatientList;
