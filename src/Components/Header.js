import React from 'react'
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="d-flex">
  <div className="p-2 w-100">Flex item</div>
  <div className="p-2 flex-shrink-1">Flex item</div>
</div>

    </div>
  )
}

export default Header