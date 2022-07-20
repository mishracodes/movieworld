import React from 'react'
import classes from './Header.module.css';
import avatar from './Assets/avatar.jpg'
const Header = () => {
  return (
    <div className={classes.header}>
      <div className="d-flex align-items-center">
  <div className="flex-grow-1">
    <div className='d-flex align-items-center'>
      <div><img className={classes.avatar} src={avatar} alt="avatar"/></div>
      <div>Hi, Sona  <span className={classes.smalltext}>How Do you feel</span></div>
    </div>
  </div>
  
    <form className='mx-3'>
      <input className={classes.searchInput} type="text" name="search" placeholder=' What movie do ytou want to watch'/>

    </form>
    <i className="fa-solid fa-bell"></i>
    <div className='mx-3'>Logout</div>
  
</div>

    </div>
  )
}

export default Header