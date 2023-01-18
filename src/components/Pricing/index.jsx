import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MonthlyPricing from "../MonthlyPricing";
import NearbyCard from "../NearbyCard";
import OptionalServices from "../OptionalServices";
import PerBooking from "../PerBooking";
import "./index.css";

const Pricing = () => {
  return (
    <Container id="pricing">
      <Row>
        <Col>
          <h1 className="text-center my-5 pricing-title">Pricing</h1>
        </Col>
      </Row>
      <Row>
        {/* <Col xs={12} md={6} className="my-3">
          <NearbyCard
            title={"Monthly"}
            subtitle={<strong>$299</strong>}
            text={<MonthlyPricing />}
          />
        </Col> */}
        <Col xs={12} className="my-3">
          <NearbyCard title={"10% Booking Fee"} text={<PerBooking />} />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <NearbyCard title={"Optional Add-On's"} text={<OptionalServices />} />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Pricing;
