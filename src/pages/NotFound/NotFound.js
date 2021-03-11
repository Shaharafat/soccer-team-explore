import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Row className="not-found-page mx-auto">
      <Col xs={12} md={8} lg={6} className="d-flex flex-column align-items-center">
        <Image
          src="https://i.postimg.cc/mgL3gBnR/undraw-not-found-60pq.png"
          className="not-found-image"
        />
        <h2>404! Not Found</h2>
        <Button as={Link} to="/" className="subheader-button">
          <FontAwesomeIcon icon={faHome} />
          <span className="ml-2">Go Home</span>{" "}
        </Button>
      </Col>
    </Row>
  );
};

export default NotFound;
