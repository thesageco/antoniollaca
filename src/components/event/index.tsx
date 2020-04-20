import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import { LanguageSetStore } from '../../App'

enum EventStatus {
  OnTrack = "On",
  Cancelled = "Off"
}

interface EventProp {
  key: number;
  title: String;
  place: String;
  details: String;
  dates: String;
  location: String;
  status: EventStatus;
}

export default function Event(props: EventProp) {
  const [state, setState] = useState(props);
  
  return (
    <div className="event" key={state.key}>
      <p className="title">{state.title}</p>
      <p className="place">{state.place}</p>
      <p className="details">{state.details}</p>
      <div className="dateLocation">
        <p className="dates">{state.dates}&nbsp;<span>|</span>&nbsp;</p><p className="location">{state.location}</p>
      </div>
      <p className={`status ${state.status}`}>{state.status == EventStatus.OnTrack ? "On Track" : "Cancelled"}</p>
    </div>
  );

};

export {EventStatus, Event};

