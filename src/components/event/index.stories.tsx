import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import {Event, EventStatus} from '../event'

import {LanguageStore} from '../../App'

export default {
  title: 'Event',
  component: Event,
};

export const Default = () =>  {
  return (
    <LanguageStore.Provider value={'EN'}>
      {Event({
        key: 1,
        title: "Research Study",
        place: "Université de Québec à Montréal",
        details: "Research Study on the conductor's gesture influences the choral ensembles sound",
        dates: "NOV 6-8",
        location: "Montreal, QC, Canada",
        status: EventStatus.OnTrack
      })}
    </LanguageStore.Provider>
  );
}

export const Cancelled = () =>  {
  return (
    <LanguageStore.Provider value={'EN'}>
      {Event({
        key: 1,
        title: "Cuban Choral Music",
        place: "Podium National Conference",
        details: "Workshop on coval/choral technique for intermediate to advance youth choirs.",
        dates: "MAY 16",
        location: "Montreal, QC, Canada",
        status: EventStatus.Cancelled
      })}
    </LanguageStore.Provider>
  );
}
