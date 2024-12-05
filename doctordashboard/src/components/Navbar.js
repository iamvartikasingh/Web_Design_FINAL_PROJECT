import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => (
  <Navbar style={{ backgroundColor: "#243642", minHeight: "70px" }} variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Doctor Dashboard</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
        <Nav.Link as={Link} to="/patients">Patients</Nav.Link>
        <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
        <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarComponent;
