import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#243642' }}>
      <Navbar.Brand href="#home" style={{ color: '#E2F1E7' }}>Mental Wellness</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive">
        <FontAwesomeIcon icon={faBars} style={{ color: '#E2F1E7' }} />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ color: '#E2F1E7' }}>
              <FontAwesomeIcon icon={faUser} style={{ color: '#E2F1E7' }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/login" style={{ color: '#243642' }}>Log In</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/user-creation" style={{ color: '#243642' }}>Create Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
