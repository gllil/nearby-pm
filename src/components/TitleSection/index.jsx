import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NearbyCard from "../NearbyCard";
import "./index.css";

const TitleSection = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="mb-5">
          <h1 className="main-title">Let Us Make Short Term Rentals Easy!</h1>
          <h1 className="main-subtitle">
            We want to make things simple and help you keep more of your
            profits.
          </h1>
          <Row>
            <Col className="text-start">
              <Button size="lg" as="a" href="#pricing">
                Learn More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"hand-holding-dollar"}
            title={"Simple Pricing"}
            text={"Pricing that is easy to understand with no surprise fees."}
          />
        </Col>
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"list-check"}
            title={"Flexible Services"}
            text={
              "Be as hands off or as hands on as you want. Services you want to handle on your own can save you money.*"
            }
          />
        </Col>
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"handshake-angle"}
            title={"Seamless Onboarding"}
            text={
              "We are with you every step of the way to help get your property set up the right way."
            }
          />
        </Col>
        <Col xs={12} md={6} className="my-3">
          <NearbyCard
            cardIcon={"chart-column"}
            title={"Financial Reporting"}
            text={
              "Detailed financial statements to keep track of your progress."
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TitleSection;
