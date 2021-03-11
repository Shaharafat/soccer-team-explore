import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Loader, SubHeader, Teams } from "../../components";
import { useThemeContext } from "../../context/ThemeContext";

const Home = ({ toggleTheme }) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useThemeContext();

  // get team data from api when component mounts.
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        );
        const { teams: fetchedTeams } = res.data;

        // set teams
        setTeams(fetchedTeams);
        // stop loading after fetching data
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <div style={{ background: theme.background }} className="Home-wraper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <SubHeader toggleTheme={toggleTheme} />
          <Teams teams={teams} />
        </>
      )}
    </div>
  );
};

export default Home;
