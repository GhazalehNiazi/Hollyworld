import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import classes from "./Row.module.css";

const Row = ({ fetchUrl, Active }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [currentMovie, setCurrentMovie] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <React.Fragment>
      {Active && (
        <div
          className={classes.main}
          style={{
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path}')`,
          }}
        >
          <div className={classes.posters}>
            {movies.map((movie) => {
              return (
                  <img
                    className={classes.postersImage}
                    src={`${baseURL}${movie.poster_path}`}
                    key={movie.id}
                    alt={movie.name}
                  />
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Row;
