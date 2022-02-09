import "./App.css";
import requests from "./API/request";
import MainPage from "./components/MainPage";
import Genres from "./components/Genres";
import { useState } from "react";

function App() {

  const [title , setTitle] = useState('Top Rated');
  const clickHandler = (selectedTitle) => {
    setTitle(selectedTitle);
    console.log(title);
  };

  return (
    //prettier ignore 
    <div className="App">
      <div className="container">
        <Genres onSelect={clickHandler.bind(this)} title="Trending" Active={title === 'trending'|| false}/>
        <Genres onSelect={clickHandler.bind(this)} title="Top Rated" Active={title === 'Top Rated' || false}/>
        <Genres onSelect={clickHandler.bind(this)} title="netflix Originals" Active={title === 'netflix Originals' || false}/>
      </div>
      <MainPage title="Trending" fetchUrl={requests.fetchTrending} Active={title === 'trending' || false} />
      <MainPage title="Top Rated" fetchUrl={requests.fetchTopRated} Active={title === 'Top Rated' || false}/>
      <MainPage
        title="netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        Active={title === 'netflix Originals' || false}
      />
    </div>
  );
}

export default App;
