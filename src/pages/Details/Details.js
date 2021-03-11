import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Header, Loader, SubHeader, TeamDetails } from "../../components";
import { useThemeContext } from "../../context/ThemeContext";

const Details = ({ toggleTheme }) => {
  const { teamId } = useParams();
  const history = useHistory();

  const [teamDetails, setTeamDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const theme = useThemeContext();

  // get team details from api when this page mounts.
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel;

    (async () => {
      try {
        const res = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`,
          {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
          }
        );
        // destructure team data from object
        const {
          teams: [fetchedDetails],
        } = res.data;

        // if team id is invalid and not data found
        // then redirect to not found page.
        if (typeof res.data.teams === "string") {
          history.push("/notFound");
        }

        // set teams
        setTeamDetails(fetchedDetails);
        // stop loading after fetching data
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    })();
    // cancel axios request when page unmounts
    return () => {
      cancel();
    };
  }, [teamId, history]);

  // destructure properties
  const { strTeam, strTeamBadge, strStadiumThumb } = teamDetails;

  return (
    <div style={{ background: theme.background }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header
            teamLogo={strTeamBadge}
            teamName={strTeam}
            isDetailsPage={true}
            banner={strStadiumThumb}
          />
          <SubHeader showHomeButton={true} toggleTheme={toggleTheme} />
          <TeamDetails {...teamDetails} />
        </>
      )}
    </div>
  );
};

export default Details;
