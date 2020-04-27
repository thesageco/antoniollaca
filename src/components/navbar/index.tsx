import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Dropdown from '../dropdown';

function Navbar() {
  const [active, setActive] = useState('');
  
  return (
    <div className="navbar">
      <nav className="navbar container">
        <div className="left">
          <Link to="/">Antonio Llaca</Link>
        </div>
        <div className="right">
          <Link to="/about">About</Link>
          <Link to="/media">Media</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
          {Dropdown({
            options: ["EN", "FR", "SP"]
          })}
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

