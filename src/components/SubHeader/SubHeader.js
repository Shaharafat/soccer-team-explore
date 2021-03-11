import { faHome, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { themes, useThemeContext } from "../../context/ThemeContext";
import "./SubHeader.css";

const SubHeader = ({ showHomeButton = false, toggleTheme }) => {
  const theme = useThemeContext();

  return (
    <Container className="py-3">
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          {/* if showHomeButton is true then show home button */}
          {showHomeButton && (
            <Button as={Link} to="/" className="subheader-button">
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">Go Home</span>{" "}
            </Button>
          )}
          {
            <Button onClick={toggleTheme} className="subheader-button ml-auto">
              <FontAwesomeIcon icon={theme === themes.light ? faMoon : faSun} />
              <span className="ml-2">
                {theme === themes.light ? "Dark" : "Light"}
              </span>
            </Button>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default SubHeader;
