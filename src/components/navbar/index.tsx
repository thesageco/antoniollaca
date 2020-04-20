import React, { useState } from 'react';
import './index.scss';
import Dropdown from '../dropdown';

function Navbar() {
  const [active, setActive] = useState('');
  
  return (
    <div className="navbar">
      <nav className="navbar container">
        <div className="left">
          <a href="/">Antonio Llaca</a>
        </div>
        <div className="right">
          <a href="/about">About</a>
          <a href="/media">Media</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact</a>
          {Dropdown({
            options: ["EN", "FR", "SP"]
          })}
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

