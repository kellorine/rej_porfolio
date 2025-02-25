import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaCode, FaEnvelope, FaBars, FaProjectDiagram} from 'react-icons/fa';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]); // Re-run effect when `isOpen` changes

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        ref={buttonRef}
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
        onClick={(e) => {
          e.stopPropagation(); // Prevents closing immediately
          setIsOpen((prev) => !prev);
        }}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>

      {/* Sidebar Navigation */}
      <nav ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Container>
          <div className="sidebar-header">
            <h3 className="fw-bold mb-4">Portfolio</h3>
          </div>
          <Nav className="flex-column">
            {[
              { href: "#home", icon: <FaHome />, label: "Home" },
              { href: "#about", icon: <FaUser />, label: "About" },
              { href: "#skills", icon: <FaCode  />, label: "skills" },
              { href: "#project", icon: <FaProjectDiagram />, label: "Projects" },
              { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
           
            ].map(({ href, icon, label }) => (
              <Nav.Link
                key={href}
                href={href}
                className="sidebar-link"
                onClick={() => setIsOpen(false)}
              >
                {icon} <span className="ms-2">{label}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </nav>
    </>
  );
}

export default Navigation;
