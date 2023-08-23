import React from "react";
import "./index.css";
import { Col, Container, Row } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-start">
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-phone"></i>
              </span>
              <a className="contact" href="tel:+1-407-243-8857">
                (407) 243-8857
              </a>
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <a
                className="contact"
                href="mailto:support@nearbyrealtyhomes.com"
              >
                Support@NearbyRealtyHomes.com
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
