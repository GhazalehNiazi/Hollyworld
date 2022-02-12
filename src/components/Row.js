import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import classes from "./Row.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination,Keyboard,Navigation } from "swiper";

const Row = ({ fetchUrl, Active, title }) => {
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
            transition: "all 600ms",
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}')`,
          }}
        >
          <Swiper
          // effect={"coverflow"}
            className = {`${classes.posters} mySwiper`}
            slidesPerView={3}
            spaceBetween={30}
            // coverflowEffect={{
            //   rotate: 1,
            //   stretch: 10,
            //   depth: 50,
            //   modifier: 3,
              // slideShadows: true,
            // }}
            centeredSlides={true}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Keyboard,Pagination]}

          >
            {movies.map((movie) => {
              //   console.log(movie === currentMovie);
              return (
                <SwiperSlide
                  className={classes.movieContainer}
                >
                  <img
                    onClick={clickHandler.bind(this, movie)}
                    // className={`${classes.posterImg} ${
                    //   movie === currentMovie && `${classes.active}`
                    // }`}
                    src={`${baseURL}${movie.poster_path}`}
                    key={movie.id}
                    alt={movie.name}
                    className={classes.posterImg}
                  />
                  <div className={classes.movieName}>
                    {movie.name || movie.title}
                  </div>
                </SwiperSlide>
              );

          
            })}
          </Swiper>
        </div>
      )}
    </React.Fragment>
  );
};

export default Row;
