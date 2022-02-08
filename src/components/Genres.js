import React from "react";
import classes from "./Genres.module.css";
function Genres({ title }) {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
}

export default Genres;
