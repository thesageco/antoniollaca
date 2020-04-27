import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import {UpcomingEvents} from '../upcoming_events'

import {LanguageStore} from '../../App'

export default {
  title: 'UpcomingEvents',
  component: UpcomingEvents,
};

export const Default = () =>  {
  return (
    <LanguageStore.Provider value={'EN'}>
      {UpcomingEvents({})}
    </LanguageStore.Provider>
  );
}
