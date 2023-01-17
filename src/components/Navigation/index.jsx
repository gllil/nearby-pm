import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  return (
    <Navbar className="mb-3">
      <Container>
        <Navbar.Brand className="nav-phone">
          <a href="tel:+1-407-243-8857">(407) 243-8857</a>
        </Navbar.Brand>
        <Nav>
          <Nav.Item className="nav-phone">
            <Nav.Link href="#pricing">
              <h4>Pricing</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-phone">
            <Nav.Link href="#contact">
              <h4>Contact Us</h4>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item className="nav-phone">
            <Link to="/forecast" className="nav-link">
              <h4>Forecast Tool</h4>
            </Link>
          </Nav.Item> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
