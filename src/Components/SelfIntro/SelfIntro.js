import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi,👋 I'm <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Pummy Sharma</span> an aspiring and determined <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span style={{color: "#0A81AB" , fontStyle:"italic"}}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
              <br/>
              <br/>
              I developed passion for coding a few years back when I printed my first <span style={{color: "#0A81AB" , fontStyle:"italic"}}> "Hello world"</span> 😃, that hello world just hits different 😌 . Since then aesthetically functional websites has just been my thing.
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}

            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/pummysh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pummy-sharma-172514218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/sijeeshmiziha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://youtube.com/c/SijeeshMiziha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
