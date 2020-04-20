import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import { LanguageStore, LanguageSetStore } from '../../App'
import Dropdown from '../dropdown';

function Navbar() {
  const [active, setActive] = useState('');
  
  const dispatch = useContext(LanguageSetStore);
  const lang = useContext(LanguageStore);
  
  function handleClick(event: any) {
    event.preventDefault();
    // @ts-ignore
    dispatch({action: 'update', lang:event.target.value})
  }
  // <select className="custom-select" id="language" onChange={(e) => handleClick(e)}>
  //   <option value="EN">EN</option>
  //   <option value="FR">FR</option>
  //   <option value="SP">SP</option>
  // </select>
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

