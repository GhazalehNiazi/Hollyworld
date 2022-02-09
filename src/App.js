import "./App.css";
import requests from "./API/request";
import MainPage from "./components/MainPage";
import Genres from "./components/Genres";
import { useState } from "react";

function App() {
  const [active , setActive] = useState()
  const clickHandler = (title) => {
    setActive(title);
    console.log(title);
  };

  return (
    <div className="App">
      <div className="container">
        <Genres onSelect={clickHandler.bind(this)} title="Trending" />
        <Genres onSelect={clickHandler.bind(this)} title="Top Rated" />
        <Genres onSelect={clickHandler.bind(this)} title="netflix Originals" />
      </div>
      <MainPage title="Trending" fetchUrl={requests.fetchTrending} Active />
      <MainPage title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MainPage
        title="netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  );
}

export default App;
