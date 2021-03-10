import React from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import "./Header.css";

const Header = ({
  teamLogo = undefined,
  teamName = undefined,
  isDetailsPage = false,
  banner = undefined,
}) => {
  return (
    <Container fluid>
      <Row>
        <Card className="bg-dark text-white ">
          {/* if team banner is available, show that
          otherwise show site banner */}
          {
            <Card.Img
              src={
                banner ? banner : "https://i.postimg.cc/tR2rsrct/vvZQmlz.jpg"
              }
              alt="team banner"
              className="header-background-image"
            />
          }
          <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
            {teamLogo && <Image src={teamLogo} className="header-team-image" />}

            {/* if its image details page then show team name
            otherwise show site name */}
            {
              <Card.Title className="header-text">
                {isDetailsPage ? teamName : "Soccer Team Diver"}
              </Card.Title>
            }
          </Card.ImgOverlay>
        </Card>
      </Row>
    </Container>
  );
};

export default Header;
