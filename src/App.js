import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchView from "./components/SearchView";
import AboutView from "./components/AboutView";
import MovieView from "./components/MovieView";
import { Switch, Route } from "react-router-dom";
import Page404 from "./components/Page404";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https:api.themoviedb.org/3/search/movie?api_key=df39cc89a07614ae3b5e43af7cc7c266&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
