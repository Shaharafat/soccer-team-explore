import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SingleTeam.css";

const SingleTeam = ({
  team: { strTeam, strTeamBadge, strSport, strGender },
}) => {
  return (
    <Card className="shadow-sm p-1">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Img
          variant="top"
          src={strTeamBadge}
          className="team-logo"
        ></Card.Img>
        <Card.Title className="mt-3">{strTeam}</Card.Title>
        <Card.Text>{strSport}</Card.Text>
        <Card.Text>{strGender}</Card.Text>
        <Button variant="primary">
          Explore{" "}
          <span className="ml-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleTeam;
