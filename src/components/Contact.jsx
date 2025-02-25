import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <Row className="text-center">
          <Col lg={12}>
            <h2 className="section-title">Contact Information</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="skill-card">
              <Row className="g-4">
                <Col md={4} className="text-center">
                  <FaPhone className="skill-icon" />
                  <h3 className="h5">Phone</h3>
                  <p>+63 908 518 2170</p>
                </Col>
                <Col md={4} className="text-center">
                  <FaEnvelope className="skill-icon" />
                  <h3 className="h5">Email</h3>
                  <p>rejbascoguinb@gmail.com</p>
                </Col>
                <Col md={4} className="text-center">
                  <FaMapMarkerAlt className="skill-icon" />
                  <h3 className="h5">Address</h3>
                  <p>Block 23 Lot 19 G 21 Verde Heights Subdivision<br />
                     Gaya-Gaya, CSJDM, Bulacan</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;