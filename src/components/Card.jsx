import React from 'react';
import Card from 'react-bootstrap/Card';
import Bernardo from '../img/Bernardo.jpg';

 
export default function PresentationCard() {
  return (
    <Card className='cardMove' wrap={true}>
      <Card.Body>
        <img className='circle-img' src={Bernardo} alt="img" />
        <Card.Text>Hi! My name is Bernardo Semião and I am an aspiring Front End developer. I enjoy all things D.I.Y. and have lived in Germany since 2018. On this website I share some of my projects. You can find more about my past experience bellow</Card.Text>
      </Card.Body>
    </Card>
  );
}

