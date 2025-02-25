import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter

function Hero() {
  return (
    <section id="home" className="hero min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="hero-content text-center text-lg-start">
            {/* Auto-typing text */}
            <h2 className="typing-text text-primary">
              <Typewriter
                words={["I'm a Frontend Developer", "I'm a Programmer"]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Name */}
            <h1 className="hero-name fw-bold">REJ NOEL P. BASCOGUIN</h1>

            {/* Degree */}
            <h2 className="hero-title">BS INFORMATION SYSTEM</h2>

            {/* Description */}
            <p className="lead mb-4">
              My goal is to enhance my technical skills and use clear, effective code to
              contribute to the development process and to help my team produce software
              solutions of the highest caliber while always improving through cooperation
              and proactive problem-solving.
            </p>
            
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </Col>

          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src="/rej.jpg" alt="Profile" className="hero-image img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
