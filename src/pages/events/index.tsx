import React, { useEffect, useState, useContext } from 'react';
import './index.scss';
import {LanguageStore} from '../../App';
import {Button, ButtonType} from '../../components/button';
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