import React from "react";
import { Button, Card } from "react-bootstrap";
import "./index.css";
const NearbyCard = ({
  id,
  title,
  subtitle,
  text,
  link,
  button,
  buttonAction,
  cardIcon,
  blue,
  orange,
  className,
}) => {
  return (
    <Card
      id={id}
      className={`main-card ${className}`}
      style={{
        color: `${blue ? `#fff` : "#162e51"}`,
        background: `linear-gradient(160deg, ${
          orange ? "#ffa946" : blue ? null : "#ffd055"
        }, #fff)`,
      }}
    >
      <Card.Body className="card-body">
        {cardIcon && (
          <Card.Title className="text-center my-4">
            <i className={`fa-solid fa-${cardIcon} fa-2xl`}></i>
          </Card.Title>
        )}
        {title && (
          <Card.Title className="text-center">
            <h1>{title}</h1>
          </Card.Title>
        )}
        {subtitle && (
          <Card.Subtitle className="text-center">
            <h4>{subtitle}</h4>
          </Card.Subtitle>
        )}
        {text && <div className="text-center card-text">{text}</div>}
        {link && <Card.Link className="text-center">{link}</Card.Link>}
      </Card.Body>
      {button && (
        <Button className="text-center" onClick={buttonAction}>
          {button}
        </Button>
      )}
    </Card>
  );
};

export default NearbyCard;
