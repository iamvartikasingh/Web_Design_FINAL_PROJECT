import React from 'react';
import { Accordion, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* FAQ Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ color: '#243642' }}> {/* Dark color for heading */}
          Frequently Asked Questions
        </h2>
        <Accordion>
          <Accordion.Item eventKey="0" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}> {/* Dark color for text */}
              What is Mental Health Wellness Website?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              We are a comprehensive wellness platform designed to advance health by providing accessible and innovative wellness solutions. Our services include personalized nutrition plans, lifestyle coaching, and expert medical guidance to help you achieve optimal health and well-being.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}>
              How can I access MHW’s services?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              You can access our services by signing up on our platform and choosing the wellness plan that suits your needs. We offer virtual consultations, in-person sessions, and on-demand resources.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}>
              Who are the experts behind Mental Health Wellness?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              Our team includes certified nutritionists, mental health professionals, and wellness coaches dedicated to your health and wellness journey.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" style={{ backgroundColor: '#E2F1E7' }}>
            <Accordion.Header style={{ color: '#243642' }}>
              What makes us different from other wellness platforms?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#629584' }}>
              combines evidence-based interventions with a personalized approach to health and wellness. Our platform integrates physical, mental, and emotional wellness for holistic care.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#387478', color: '#E2F1E7' }} className="py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Your path to a healthier life starts here</h5>
              <Button variant="light" style={{ backgroundColor: '#629584', color: '#243642' }} className="mt-2">
                Start Your Journey
              </Button>
            </Col>
            <Col md={2}>
              <h6>Quick Menu</h6>
              <ul className="list-unstyled" style={{ color: '#E2F1E7' }}>
                <li>Home</li>
                <li>Services</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Company</li>
              </ul>
            </Col>
            <Col md={2}>
              <h6>Company</h6>
              <ul className="list-unstyled" style={{ color: '#E2F1E7' }}>
                <li>Privacy Policy</li>
                <li>Copyright</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Terms and Conditions</li>
              </ul>
            </Col>
            <Col md={2}>
              <h6>Resources</h6>
              <ul className="list-unstyled" style={{ color: '#E2F1E7' }}>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Newsletter</li>
                <li>Support</li>
              </ul>
            </Col>
          </Row>
          <Row className="text-center mt-3">
            <Col>
              <small>Copyright © 2024 Mental Health Wellnes</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
