import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Dropdown from '../dropdown';
import { slide as Menu } from 'react-burger-menu'


function Hamburger() {  
  return (
    <div className="burger">
      <Menu width={ '60%' }>
        <Link className="menu-item" to="/about">About</Link>
        <Link className="menu-item" to="/media">Media</Link>
        <Link className="menu-item" to="/events">Events</Link>
        <Link className="menu-item" to="/contact">Contact</Link>
        <Link className="menu-item" to="#!">
          {Dropdown({
            options: ["EN", "FR", "SP"]
          })}
        </Link>
      </Menu>
    </div>
  );

};

export default Hamburger;