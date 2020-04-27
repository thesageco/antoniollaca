import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import {Event, EventCardType, EventStatus} from '../event'
import events_json from '../../assets/events.json';

console.log(events_json.sort(function(a, b) {
      return (a.position - b.position);
  }))

interface UpcomingEventsProp {
  type? : EventCardType;
}

export default function UpcomingEvents(props: UpcomingEventsProp) {
  if(props.type === EventCardType.FullWidth){
    return (
      <div className="upcoming-events-wide container">
        <div className="header">
          <h1>Events</h1>
        </div>
        <div className="events-listing">
          {events_json.map((event, i) => {
            return (
              Event({
                key: i,
                title: event.title,
                place: event.place,
                details: event.details,
                dates: event.dates,
                location: event.location,
                status: event.status === "On" ? EventStatus.OnTrack : EventStatus.Cancelled,
                type: EventCardType.FullWidth,
                position: event.position,
              })
            )
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="upcomingEvents">
      <div className="header">
        <h1>Upcoming Events</h1>
        <Link to="events">See all events</Link>
      </div>
      <div className="events-listing">
        {events_json.slice(0,3).map((event, i) => {
          return (
            Event({
              key: i,
              title: event.title,
              place: event.place,
              details: event.details,
              dates: event.dates,
              location: event.location,
              status: event.status === "On" ? EventStatus.OnTrack : EventStatus.Cancelled,
              position: event.position,
            })
          )
        })}
      </div>
    </div>
  );

};

export {UpcomingEvents};

