import React from "react";
import {
  faFlag,
  faFutbol,
  faMapPin,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Social } from "../../components";
import "./TeamDetails.css";
import {useThemeContext} from '../../context/ThemeContext'

const TeamDetails = ({
  intFormedYear,
  strCountry,
  strGender,
  strSport,
  strDescriptionEN,
  strFacebook,
  strTwitter,
  strInstagram,
  strWebsite,
  strYoutube,
}) => {
  const theme = useThemeContext();

  // it will iterate to generate the team details in list
  const teamDetailsLists = [
    {
      itemLogo: faMapPin,
      itemData: `Founded: ${intFormedYear}`,
    },
    {
      itemLogo: faFutbol,
      itemData: `Sports Type: ${strSport}`,
    },
    {
      itemLogo: faFlag,
      itemData: `Country: ${strCountry}`,
    },
    {
      itemLogo: faVenusMars,
      itemData: `Gender: ${strGender}`,
    },
  ];
  // This will sent to social section as props
  let socialLinks = {
    strFacebook,
    strYoutube,
    strInstagram,
    strTwitter,
    strWebsite,
  };

  return (
    <Container className="mt-3">
      <Row className="w-100 mx-auto d-flex justify-content-between align-items-center teamDetails-container">
        <Col xs={12} md={6} className=" p-3">
          <ul className="m-0 list-unstyled details-list">

            {teamDetailsLists.map(({ itemLogo, itemData }) => (
              <li key={itemData} className="py-2">
                <span className="list-icon">
                  <FontAwesomeIcon icon={itemLogo} />{" "}
                </span>
                <span className="">{itemData}</span>
              </li>
            ))}

          </ul>
        </Col>

        <Col xs={12} md={6} className="p-3 d-flex justify-content-center justify-content-md-end">
          {String(strGender).match(/^male$/i) ? (
            <Image
              src={"https://i.postimg.cc/6qWRXdrW/male.png"}
              className="team-image"
            />
          ) : (
            <Image
              src={"https://i.postimg.cc/Y9fgZXmD/female.png"}
              className="team-image"
            />
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p style={{color: theme.color} } className="team-description">{strDescriptionEN}</p>
        </Col>
      </Row>
      {/* Social */}
      {<Social links={{ ...socialLinks }} />}
    </Container>
  );
};

export default TeamDetails;
