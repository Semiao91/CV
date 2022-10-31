import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">

      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Photos</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand title="nitika.2209@gmail.com" href="https://mail.google.com/mail/u/0/?fs=1&to=berna.1991.1@gmail.com&su=SUBJECT&body=BODY&tf=cm"> <FontAwesomeIcon icon={faEnvelope} /></Navbar.Brand>
        <Navbar.Brand href="https://www.linkedin.com/in/bernardo-semi%C3%A3o-97315b154/"> <FontAwesomeIcon icon={faLinkedin} /></Navbar.Brand>
        <Navbar.Brand href="https://github.com/Semiao91"> <FontAwesomeIcon icon={faGithub} /></Navbar.Brand>
        <Tooltip >
          Simple tooltip
        </Tooltip>
      </Container>


    </Navbar>
  );
};

