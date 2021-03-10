import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, TeamDetails } from "../../components";

const Details = () => {
  const { teamId } = useParams();

  const [teamDetails, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  // get team details from api when this page mounts.
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        );
        // destructure team data from object
        const {
          teams: [fetchedDetails],
        } = res.data;

        // set teams
        setDetails(fetchedDetails);
        // stop loading after fetching data
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [teamId]);

  // destructure properties
  const { strTeam, strTeamBadge, strStadiumThumb } = teamDetails;

  return (
    <>
      {!loading && (
        <>
          <Header
            teamLogo={strTeamBadge}
            teamName={strTeam}
            isDetailsPage={true}
            banner={strStadiumThumb}
          />
          <TeamDetails {...teamDetails} />
        </>
      )}
    </>
  );
};

export default Details;
