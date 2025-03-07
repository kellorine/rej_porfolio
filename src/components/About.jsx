import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="text-center">
          <Col lg={12}>
            <h2 className="section-title">About Me</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <div className="skill-card">
              <FaGraduationCap className="skill-icon" />
              <h3 className="h4">Education</h3>
              <p>Bachelor of Science in Information System<br />
                La Concepcion College (2018-2024)<br />
                Tech-Voc ICT<br />
                Christian Ecclesiastical School (2012-2018)</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-card">
              <FaBriefcase className="skill-icon" />
              <h3 className="h4">Experience</h3>
              <p>On-the-job Training at La Concepcion College<br />
                 Computer Technician<br />
                 ID Assistant Editor<br />
                (January 2023 - April 2024)</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-card">
              <FaCode className="skill-icon" />
              <h3 className="h4">Activities</h3>
              <p>Assistant Programmer & Page Designer<br />
                Personal Health Assistant and Technology<br />
                with Statistical Analysis</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;