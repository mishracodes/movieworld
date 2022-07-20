import React from 'react';
import classes from './Navbar.module.css';
import { Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={classes['side-navbar']}>
    <ul className={classes['nav-list']}>
      <Link to="/"><li><i className={`${classes.fafa} ${classes.active} fa-solid fa-house`}></i> Home </li></Link>
      <Link to="/"><li><i className={`${classes.fafa} fa-solid fa-fire-flame-curved`}></i> Popular</li></Link>
      <Link to="/"><li><i className={`${classes.fafa} fa-solid fa-film`}></i> Movie</li></Link>
      <Link to="/"><li><i className={`${classes.fafa} fa-brands fa-youtube`}></i> <br/> TV Series</li></Link>
    </ul>
    <p className={classes['fafa-footer']}><i className={`${classes.fafa} fa-solid fa-gear`}></i> <br/> Setting</p>
  </nav>
  )
}

export default Navbar