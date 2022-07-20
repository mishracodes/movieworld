import React from 'react'
import classes from "./DashboardContainer.module.css";
const DashboardContainer = (props) => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.cards}>
        {props.children}
      </div>
    </div>
  )
}

export default DashboardContainer