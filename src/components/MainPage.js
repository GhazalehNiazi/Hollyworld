import React from "react";
import Genres from "./Genres";
import Row from "./Row";
import classes from './MainPage.module.css'
function MainPage({ fetchUrl, Active, title }) {
  return (
    <div className={classes.container}>
      <Genres title={title} className={classes.title}/>
      <Row fetchUrl={fetchUrl} Active={Active} title={title} className={classes.row}/>
    </div>
  );
}

export default MainPage;
