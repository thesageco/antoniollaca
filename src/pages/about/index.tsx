import React, { useEffect, useState, useContext } from 'react';
import './index.scss';
import {LanguageStore} from '../../App';
import {Button, ButtonType} from '../../components/button';
import {UpcomingEvents} from '../../components/upcoming_events';

import history from '../../history';

interface AboutProp {
  lang: String;
}

function information(lang: String){
  switch(lang){
    case 'EN': 
       return ["EN_ABOUT"];
    case 'FR': 
      return ["FR_ABOUT"];
    case 'SP': 
      return ["SP_ABOUT"]
    default: 
      return ["", ""];
  }
}

export default function About(props: AboutProp) {
  const [about, setAbout] = useState("");
  
  useEffect(() => {
    let info = information(props.lang);
    setAbout(info[0]);
  }, [props.lang]);

  return (
  <div className="about container">
    <h1>About</h1>
    <p>{about}</p>
  </div>)
}