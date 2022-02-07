import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import classes from './Row.module.css'

const Row = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      console.log(request.data.results[2].backdrop_path);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  console.log(movies[2]?.backdrop_path);

  return (
    <React.Fragment>
      <div
      className={classes.main}
        style={{
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies[2]?.backdrop_path}')`,
        }}
      >
        h
      </div>
    </React.Fragment>
  );
};

export default Row;
