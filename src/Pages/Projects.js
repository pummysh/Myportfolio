import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://i.ibb.co/yFBMBhT/h.png"
              title="Cult-fit clone"
              description="At Cult, It makes fitness is fun and easy. Our workouts can be done both at a cult center and at home with the help of do-it-yourself workout videos. Cult gives the best in technology to give a world-class experience. You can book classes, follow workout videos, Order food, buy sports Gear, Health care, and mind Therapy."
              tech="Tech-Stacks"
              techD="Html | Javascript | Tailwind | Css | MongoDb | Express "
              link="https://masaicult.herokuapp.com/"
              a="https://github.com/pummysh/Cultfit.com"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/x7cpTTR/y.png"
              title="Yes-style clone"
              description="YesStyle.com is the first online retailer in Asia to globally distribute a wide range of lifestyle and fashion products from the region."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://yesstyleclone.netlify.app/"
              a="https://github.com/pummysh/YesStyle"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/link.png"
              title="LinkedIn"
              description="This is the clone of LinkedIn, which is a web application primarily used for professional networking and career development."
              tech="Tech-Stacks"
              techD="React | Redux | Firebase | Styled-Components "
              link="https://linkedin-production-app.web.app/"
              a="https://github.com/pummysh/linkedin-clone-project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
