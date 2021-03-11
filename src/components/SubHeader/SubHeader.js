import { faHome, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SubHeader.css";

const SubHeader = ({ showHomeButton = false, light = true }) => {
  return (
    <Container className="py-3">
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          {showHomeButton && (
            <Button as={Link} to="/" className="subheader-button">
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">Go Home</span>{" "}
            </Button>
          )}
          {
            <Button as={Link} to="/" className="subheader-button ml-auto">
              <FontAwesomeIcon icon={light ? faSun : faMoon} />
              <span className="ml-2">{light ? "Dark" : "Light"}</span>
            </Button>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default SubHeader;
