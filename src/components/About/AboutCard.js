import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nischal Gautam, </span>
            a PhD student at <span className="purple"> Baylor University. </span>
            <br />
            <br />
            I hold a Bachelor's degree in Electrical Engineering from Nepal 
            and am currently pursuing a PhD in Electrical and Computer Engineering at 
            Baylor University. My academic journey has been driven by a 
            deep passion for exploring the cutting-edge field of quantum computing. 
            Through my research, I aim to contribute to advancements in this 
            transformative technology and its potential applications. 
            Beyond academics, I enjoy engaging in projects and discussions that 
            push the boundaries of innovation and discovery.
            <br />
            <br />
              Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
