import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import classes from "./Row.module.css";

const Row = ({ fetchUrl, Active }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);
  // let currentMovie;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setCurrentMovie(request.data.results[0]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const clickHandler = (selectedMovie) => {
    console.log(selectedMovie);
    const index = movies.indexOf(selectedMovie);
    console.log(index);
    const movie = movies[index];
    setCurrentMovie(movie);
  };

  return (
    <React.Fragment>
      {Active && (
        <div
          className={classes.main}
          style={{
            transition:'all 450ms ease-in',
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}')`,
          }}
        >
          <div className={classes.posters}>
            {movies.map((movie) => {
              console.log(movie === currentMovie);
              return (
                <img
                  onClick={clickHandler.bind(this, movie)}
                  className={`${classes.posterImg} ${
                    movie === currentMovie && `${classes.active}`
                  }`}
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
