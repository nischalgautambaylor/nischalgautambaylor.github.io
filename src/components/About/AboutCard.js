import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nischal Binod Gautam </span>
            from <span className="purple"> Waco, Texas,United States. </span>
            <br />
            <br />
            I am an Electrical engineer with over 5 years of experience in low-voltage systems,
            integrating technical knowledge with sales and project management abilities.
            Driven to perform in tough tasks and make significant contributions to organisational success.
            <br />
            <br />
            I am recently studying at Baylor University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Charity work
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
