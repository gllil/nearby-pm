import { Button, Container, Row, Col } from "react-bootstrap";
import "./index.css";

const Tabs = ({ view, setView }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <Button
            className="w-100 tab-btn"
            onClick={() => setView("str")}
            active={view === "str"}
            size="lg"
          >
            Short Term Rentals
          </Button>
        </Col>
        <Col className="text-center">
          <Button
            className="w-100 tab-btn"
            onClick={() => setView("ltr")}
            active={view === "ltr"}
            size="lg"
          >
            Long Term Rentals
          </Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Tabs;
