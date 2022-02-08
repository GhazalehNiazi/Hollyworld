import "./App.css";
import requests from "./API/request";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage title='Trending' fetchUrl={requests.fetchTrending} Active/>
      <MainPage title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <MainPage title='netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
