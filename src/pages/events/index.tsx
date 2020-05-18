import React from 'react';
import './index.scss';
import {EventCardType} from '../../components/event';
import {UpcomingEvents} from '../../components/upcoming_events';

interface EventsProp {
  lang: String;
}

export default function Events() {

  return (
  <div className="events container">
    {UpcomingEvents({type: EventCardType.FullWidth})}
  </div>)
}