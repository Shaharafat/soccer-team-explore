import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeContext, themes } from "./context/ThemeContext";
import { Details, Home, NotFound } from "./pages";

function App() {
  let [theme, setTheme] = useState(themes.light);
  // change theme
  const changeTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <>
      <Router>
        <ThemeContext.Provider value={theme}>
          <Switch>
            <Route exact path="/">
              <Home toggleTheme={changeTheme} />
            </Route>
            <Route path="/details/:teamId">
              <Details toggleTheme={changeTheme} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
