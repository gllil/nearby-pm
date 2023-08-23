import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NearbyCard from "../NearbyCard";
import "./index.css";
import LtrDetails from "../LtrDetails";
import LtrPricing from "../LtrPricing";

const Ltr = () => {
  return (
    <Container id="pricing">
      <Row>
        <Col>
          <h1 className="text-center my-5 pricing-title">Long Term Rentals</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="my-3">
          <NearbyCard text={<LtrDetails />} />
        </Col>
        {/* <Col xs={12} md={6} lg={4} className="my-3">
          <NearbyCard text={<LtrPricing />} />
        </Col> */}
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Ltr;
