import React, { useState } from 'react';
import './index.scss';
// import { LanguageSetStore } from '../../App'

enum EventStatus {
  OnTrack = "On",
  Cancelled = "Off"
}

enum EventCardType {
  Narrow = 0,
  FullWidth = 1
}

interface EventProp {
  key: number;
  title: String;
  place: String;
  details: String;
  dates: String;
  location: String;
  status: EventStatus;
  type? : EventCardType;
  position: number;
}

export default function Event(props: EventProp) {
  const [state, setState] = useState(props);
  
  return (
    <div className={`event ` + (state.type === EventCardType.FullWidth ? "fullwidth" : "")} key={state.key}>
      <p className="title">{state.title}</p>
      <p className="place">{state.place}</p>
      <p className="details">{state.details}</p>
      <div className="dateLocation">
        <p className="dates">{state.dates}</p>&nbsp;<span>|</span>&nbsp;<p className="location">{state.location}</p>
      </div>
      <p className={`status ${state.status}`}>{state.status === EventStatus.OnTrack ? "On Track" : "Cancelled"}</p>
    </div>
  );

};

export {EventStatus, EventCardType, Event};

