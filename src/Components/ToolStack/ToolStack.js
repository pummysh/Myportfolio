import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiAmazonaws,
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visualstudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p>Amazonaws</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p>Netlify</p>
      </Col>
    </Row>
  );
}

export default ToolStack;