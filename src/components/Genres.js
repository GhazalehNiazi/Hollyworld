import React from "react";
import classes from "./Genres.module.css";
function Genres(props) {
  console.log(props.title);
  const clickHandler = (title) => {
    console.log(title);
    props.onSelect(title);
  };
  return (
    <div className={classes.container}>
      <h1
        className={`${classes.title} ${props.Active && `${classes.active}`}`}
        onClick={clickHandler.bind(this, props.title)}
      >
        {props.title}
      </h1>
    </div>
  );
}

export default Genres;
