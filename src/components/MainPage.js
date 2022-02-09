import React from "react";
import Genres from "./Genres";
import Row from "./Row";
import classes from './MainPage.module.css'
function MainPage({ fetchUrl, Active, title }) {
  return (
    <div className={classes.container}>
      <Row fetchUrl={fetchUrl} Active={Active} className={classes.row}/>
    </div>
  );
}

export default MainPage;
