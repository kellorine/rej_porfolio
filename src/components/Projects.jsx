import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGithub, FaReact } from 'react-icons/fa';
import { SiMicrosoftexcel, SiMicrosoftword } from 'react-icons/si';
function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const skills = [
    { icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#2965f1' },
    { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
    { icon: FaReact, name: 'React.js', color: '#61dafb' },
    { icon: FaBootstrap, name: 'Bootstrap', color: '#7952b3' },
    { icon: SiMicrosoftexcel, name: 'Excel', color: '#217346' },
    { icon: SiMicrosoftword, name: 'Word', color: '#2b579a' },
    { icon: FaGithub, name: 'GitHub', color: '#ffffff' }
  ];

  const projectList = [
    {
      title: "BIGASAN ORDER",
      description: "Fresh, High-Quality Rice.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "rice.JPG", // Direct path from public folder
      link: "https://kellorine.github.io/Bigasan/"
    },
    {
      title: "COFFE SHOP",
      description: "Discover our delicious drinks, snacks, and desserts.",
      technologies: ["HTML", "CSS", "JavaScript","React","Bootstrap"],
      image: "coffee.JPG", // Direct path from public folder
      link: "https://kellorine.github.io/rej_coffee/"
    }
  ];
  

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="section">
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <h2 className="section-title">Skills</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {skills.map((skill, index) => (
              <Col key={index} xs={6} md={3}>
                <div className="skill-card text-center">
                  <skill.icon style={{ fontSize: '4rem', color: skill.color, marginBottom: '1rem' }} />
                  <h3 className="h5" style={{ color: skill.color }}>{skill.name}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="project" className="section">
        <Container>
          <Row className="text-center mt-5">
            <Col lg={12}>
              <h2 className="section-title">Projects</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {projectList.map((project, index) => (
              <Col key={index} md={6}>
                <Card className="h-100 project-card bg-dark text-light" onClick={() => handleCardClick(project)}>
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body>
                    <Card.Title className="h4">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal for Project Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.image} alt={selectedProject?.title} className="img-fluid mb-3" />
          <p>{selectedProject?.description}</p>
          <div className="mb-3">
            {selectedProject?.technologies.map((tech, i) => (
              <span key={i} className="badge bg-primary me-2">{tech}</span>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={selectedProject?.link} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Projects;
