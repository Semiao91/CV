import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default function SubHeader() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark" >
        <Container className="Tcolor">
          <Navbar.Brand href="#home">
            <h1>Bernardo Semião</h1>
            <p>Web Developer</p>

          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
};

