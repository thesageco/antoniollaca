import React from 'react';
import './index.scss';
import {Event, EventStatus} from '../event'
import events_json from '../../assets/events.json'

export default function UpcomingEvents() {
  return (
    <div className="upcomingEvents">
      <div className="header">
        <h1>Upcoming Events</h1>
        <a href="events">See all events</a>
      </div>
      <div className="events">
        {events_json.map((event, i) => {
          return (
            Event({
              key: i,
              title: event.title,
              place: event.place,
              details: event.details,
              dates: event.dates,
              location: event.location,
              status: event.status === "On" ? EventStatus.OnTrack : EventStatus.Cancelled
            })
          )
        })}
      </div>
    </div>
  );

};

export {UpcomingEvents};

