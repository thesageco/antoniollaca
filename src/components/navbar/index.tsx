import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Dropdown from '../dropdown';

function Navbar() {
  const [active, setActive] = useState(0);
  
  const nav:any = {
    "/about": 1,
    "/media": 2,
    "/events": 3,
    "/contact":4
  }
  
  if(active !== nav[window.location.pathname]){
    setActive(nav[window.location.pathname])
  }
  
  return (
    <div className="navbar">
      <nav className="navbar container">
        <div className="left">
          <Link to="/" onClick={()=>setActive(0)}>Antonio Llaca</Link>
        </div>
        <div className="right">
          <Link className={active===1?"active":""} to="/about" onClick={()=>setActive(1)}>About</Link>
          <Link className={active===2?"active":""} to="/media" onClick={()=>setActive(2)}>Media</Link>
          <Link className={active===3?"active":""} to="/events" onClick={()=>setActive(3)}>Events</Link>
          <Link className={active===4?"active":""} to="/contact" onClick={()=>setActive(4)}>Contact</Link>
          {Dropdown({
            options: ["EN", "FR", "SP"]
          })}
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

