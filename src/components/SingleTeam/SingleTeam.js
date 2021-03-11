import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useThemeContext } from '../../context/ThemeContext';
import "./SingleTeam.css";



const SingleTeam = ({
  team: { idTeam, strTeam, strTeamBadge, strSport, strGender },
}) => {
  let theme = useThemeContext();
  let themeStyles = {
    background: theme.foreground, color:theme.color
  }
  return (
    <Card className="shadow-sm p-1" style={themeStyles}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Img
          variant="top"
          src={strTeamBadge}
          className="team-logo"
        ></Card.Img>
        <Card.Title className="mt-3">{strTeam}</Card.Title>
        <Card.Text>{strSport}</Card.Text>
        <Card.Text>{strGender}</Card.Text>
        <Button
          as={Link}
          to={`details/${idTeam}`}
          variant="primary"
          className="team-button"
        >
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
