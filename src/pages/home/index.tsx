import React, { useEffect, useState, useContext } from 'react';
import './index.scss';
import {LanguageStore} from '../../App';
import {Button, ButtonType} from '../../components/button';
import {UpcomingEvents} from '../../components/upcoming_events';

interface HomeProp {
  lang: String;
}

function information(lang: String){
  switch(lang){
    case 'EN': 
       return ["Choral conductor, teacher and clinician", ("Since 2009, Mr Llaca has conducted Coro Vivo Ottawa, and currently " +
       "teaches choral and instrumental conducting at Carelton University. He " +
       "is also a professor at the Conservatoire de Musique de Gatineau where he" +
       "conducts the choirs and orchestra. He conducts the Chinese Children's " +
       "Choir of Canada.")];
    case 'FR': 
      return ["Chef de chœur, enseignant et clinicien", ("Depuis 2009, M. Llaca "+
              "dirige Coro Vivo Ottawa et enseigne" +
              "actuellement la direction chorale et instrumentale à l'Université" +
              "Carelton. Il est également professeur au Conservatoire de Musique" +
              "de Gatineau où il dirige les chorales et l'orchestre. Il dirige" +
              "le Chinese Children's Choir of Canada.")];
    case 'SP': 
      return ["Director de coro, profesor y clínico.", "Desde 2009, el Sr. Llaca " +
      "ha dirigido Coro Vivo Ottawa, y actualmente enseña dirección coral e "+
      "instrumental en la Universidad de Carelton. También es profesor en el "+
      "Conservatorio de Música de Gatineau, donde dirige los coros y la orquesta. "+
      "Dirige el coro de niños chinos de Canadá."]
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
      <div className="container">
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