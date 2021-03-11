import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTeam from "../SingleTeam/SingleTeam";

const Teams = ({ teams,theme }) => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          {teams.map((team) => (
            <Col xs={12} md={6} lg={4} xl={3} className="mb-3" key={team.idTeam}>
              <SingleTeam team={team} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Teams;
