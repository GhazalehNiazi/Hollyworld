import "./App.css";
import requests from "./API/request";
import MainPage from "./components/MainPage";
import Genres from "./components/Genres";
import { useState } from "react";
import logo from "./assets/logo.png";
function App() {
  const [title, setTitle] = useState("Top Rated");
  const clickHandler = (selectedTitle) => {
    setTitle(selectedTitle);
    console.log(title);
  };

  return (
    // prettier-ignore
    <div className="app">
        <div className='nav'> 
            <div className='logo'><img src={logo}/> 
            </div>
         </div>
      <div className="container">
        <Genres onSelect={clickHandler.bind(this)} title="Trending" Active={title === 'Trending'|| false}/>
        <Genres onSelect={clickHandler.bind(this)} title="Top Rated" Active={title === 'Top Rated' || false}/>
        <Genres onSelect={clickHandler.bind(this)} title="Originals" Active={title === 'Originals' || false}/>
      </div>
      <MainPage title="Trending" fetchUrl={requests.fetchTrending} Active={title === 'Trending' || false} />
      <MainPage title="Top Rated" fetchUrl={requests.fetchTopRated} Active={title === 'Top Rated' || false}/>
      <MainPage
        title="Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        Active={title === 'Originals' || false}
      />
    </div>
  );
}

export default App;
