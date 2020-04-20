import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import { LanguageStore, LanguageSetStore } from '../../App'
import Dropdown from '../dropdown';
import { slide as Menu } from 'react-burger-menu'


function Hamburger() {  
  return (
    <div className="burger">
      <Menu width={ '60%' }>
        <a className="menu-item" href="/about">About</a>
        <a className="menu-item" href="/media">Media</a>
        <a className="menu-item" href="/events">Events</a>
        <a className="menu-item" href="/contact">Contact</a>
        <a className="menu-item">
          {Dropdown({
            options: ["EN", "FR", "SP"]
          })}
        </a>
      </Menu>
    </div>
  );

};

export default Hamburger;