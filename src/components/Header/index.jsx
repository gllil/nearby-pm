import React from "react";
import { Container, Image } from "react-bootstrap";
import fullLogo from "../../assets/logos/fullLogoWhite.png";

const Header = () => {
  return (
    <Container className="mb-5">
      <Image src={fullLogo} width="100%" />
    </Container>
  );
};

export default Header;
