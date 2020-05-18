import React, { useEffect, useState } from 'react';
import './index.scss';
import {Button, ButtonType} from '../../components/button';
import {UpcomingEvents} from '../../components/upcoming_events';

import info from '../../assets/info.json';

interface HomeProp {
  lang: String;
}

function information(lang: String){
  // @ts-ignore
  return [info[lang]["home"]["title"], info[lang]["home"]["subtext"]]
  switch(lang){
    
    case 'EN': 
       return [info["EN"]["home"]["title"], 
       ("Choral conductor and pedagogue based in Ottawa, Canada. Mr. Llaca is "+
       "Director of Choral Activities at Carleton University and Conductor of "+
       "large ensembles at the Conservatoire de Musique de Quebec (Gatineau). "+
       "Since 2009, he has conducted Coro Vivo Ottawa and is in high demand as"+
       " a conductor and clinician in Canada and around the world.")];
    case 'FR': 
      return ["Chef de chœur, pédagogue et clinicien", ("")];
    case 'SP': 
      return ["Director coral, pedagogo y tallerista", "Director coral y "+
      "pedagogo con sede en Ottawa, Canadá. El Sr. Llaca es Director de "+
      "Actividades Corales en la Universidad de Carleton (Ottawa, Canada) y "+
      "Director de grandes ensambles en el Conservatorio Superior de Música de "+
      "Quebec (Gatineau). Desde 2009, dirige Coro Vivo Ottawa y tiene una gran "+
      "demanda como director y clínico en Canadá y en todo el mundo."]
    default: 
      return ["", ""];
  }
}

export default function Home(props: HomeProp) {
  const [blurb, setBlurb] = useState("");
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    let info = information(props.lang);
    setTitle(info[0]);
    setBlurb(info[1]);
  }, [props.lang]);

  return (
  <div className="home">
    <div className="blurb">
      <div className="sub-container">
        <h1 className="text-container">{title}</h1>
        <p className="text-container">{blurb}</p>
        <div className="buttons text-container">
          {Button({
            text: "Events",
            href: "events",
            type: ButtonType.White
          })}
          {Button({
            text: "Contact",
            href: "contact",
            type: ButtonType.Gold
          })}
        </div>
      </div>
    </div>
    <div className="container">
      {UpcomingEvents({})}
    </div>
  </div>)
}