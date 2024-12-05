// UpcomingAppointments.js
import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const UpcomingAppointments = () => (
  <Container className="mt-4">
    <h2>Upcoming Appointments</h2>
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
            <Button variant="success" size="sm">Accept</Button>{" "}
            <Button variant="danger" size="sm">Decline</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jerry Wilcox</td>
          <td>05/23/2024</td>
          <td>9:45 AM</td>
          <td>
            <Button variant="success" size="sm">Accept</Button>{" "}
            <Button variant="danger" size="sm">Decline</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default UpcomingAppointments;