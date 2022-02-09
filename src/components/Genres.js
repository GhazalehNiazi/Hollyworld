import React from "react";
import classes from "./Genres.module.css";
function Genres(props) {
  console.log(props.title);
  const clickHandler=(title)=>{
    console.log(title);
    props.onSelect(title);
  }
  return (
    <div>
      <h1 className={classes.title} onClick={clickHandler.bind(this, props.title)}>{props.title}</h1>
    </div>
  );
}

export default Genres;
