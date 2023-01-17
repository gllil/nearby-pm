import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import fullLogo from "../../assets/logos/fullLogoWhite.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="nearby-footer" fluid>
      <img src={fullLogo} alt="Nearby Property Management Logo" width="250px" />
      <h5 className="mt-2">© Copyright {currentYear}</h5>
    </Container>
  );
};

export default Footer;
