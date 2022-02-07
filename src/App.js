import "./App.css";
import requests from "./API/request";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <Row fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
