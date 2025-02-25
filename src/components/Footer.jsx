import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
      <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            <p className="mb-0">© 2024 Rej Noel Bascoguin. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <a href="mailto:rejbascoguinb@gmail.com" className="text-light fs-4">
                {/* <FaEnvelope /> */}
              </a>
              <a href="#" className="text-light fs-4">
                {/* <FaGithub /> */}
              </a>
              <a href="#" className="text-light fs-4">
                {/* <FaLinkedin /> */}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;