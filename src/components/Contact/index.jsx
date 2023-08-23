import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactInfo from "../ContactInfo";
import NearbyCard from "../NearbyCard";
import "./index.css";
import ContactForm from "../ContactForm";

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
            title={"Learn More"}
            subtitle={
              "Have questions? Send us a message and we'll respond within 24 hours."
            }
            text={
              <>
                <ContactForm />
                <ContactInfo />
              </>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
