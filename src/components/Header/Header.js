import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Header.css";

const Header = ({ teamLogo }) => {
  return (
    <Container fluid>
      <Row>
        <Col className="header-bg d-flex justify-content-center align-items-center ">
          {teamLogo ? (
            <Image src={teamLogo} roundedCircle />
          ) : (
            <h2 className="header-text">Soccer Team Diver</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
