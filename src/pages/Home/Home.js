import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Teams, SubHeader } from "../../components";

const Home = () => {
  const [teams, setTeams] = useState([]);

  // get team data from api when component mounts.
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        );
        const { teams: fetchedTeams } = res.data;

        // set teams
        setTeams(fetchedTeams)
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <SubHeader />
      <Teams teams={teams} />
    </>
  );
};

export default Home;
