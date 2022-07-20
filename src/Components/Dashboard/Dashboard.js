import React from "react";
import Crousal from "../Crousal";
import classes from "./Dashboard.module.css";
import DashboardContainer from "./DashboardContainer";
import ListContainer from "./ListContainer";
const Dashboard = () => {
  return (
    <DashboardContainer>
      
      <div className={classes.cards}>
      <Crousal/>
        <div className={classes.card}>
          <p>Popular</p>
          <ListContainer />
        </div>
        <div className={classes.card}>
          <p>Popular</p>
          <ListContainer />
        </div>
        <div className={classes.card}>
          <p>Popular</p>
          <ListContainer />
        </div>
        <div className={classes.card}>
          <p>Popular</p>
          <ListContainer />
        </div>
        
      </div>
      </DashboardContainer>
  );
};

export default Dashboard;
