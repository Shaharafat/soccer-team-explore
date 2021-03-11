import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Social.css";

const Social = ({
  links: { strFacebook, strTwitter, strInstagram, strWebsite, strYoutube },
}) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          {/* social icon and link lists */}
          <ul className="d-flex justify-content-center align-items-center list-unstyled">
            <li className="social-items">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://${strFacebook}`}
                className="social-items-link"
              >
                {<FontAwesomeIcon icon={faFacebookF} />}
              </a>
            </li>
            <li className="social-items">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://${strTwitter}`}
                className="social-items-link"
              >
                {<FontAwesomeIcon icon={faTwitter} />}
              </a>
            </li>
            <li className="social-items">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://${strInstagram}`}
                className="social-items-link"
              >
                {<FontAwesomeIcon icon={faInstagram} />}
              </a>
            </li>
            <li className="social-items">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://${strYoutube}`}
                className="social-items-link"
              >
                {<FontAwesomeIcon icon={faYoutube} />}
              </a>
            </li>
            <li className="social-items">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://${strWebsite}`}
                className="social-items-link"
              >
                {<FontAwesomeIcon icon={faGlobe} />}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
