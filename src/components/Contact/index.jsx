import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactInfo from "../ContactInfo";
import NearbyCard from "../NearbyCard";
import "./index.css";

const Contact = () => {
  return (
    <Container id="contact">
      <Row>
        <Col>
          <h1 className="text-center contact-title my-5">Have Questions?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <NearbyCard
            title={"Get a free consultation"}
            text={<ContactInfo />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
