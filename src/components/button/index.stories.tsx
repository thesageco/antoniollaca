import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import {Button, ButtonType} from '../button'

import {LanguageStore} from '../../App'

export default {
  title: 'Button',
  component: Button,
};

export const White = () =>  {
  return (
    <LanguageStore.Provider value={'EN'}>
      {Button({
        text: "Events",
        href: "events",
        type: ButtonType.White
      })}
    </LanguageStore.Provider>
  );
}

export const Gold = () =>  {
  return (
    <LanguageStore.Provider value={'EN'}>
      {Button({
        text: "Events",
        href: "events",
        type: ButtonType.Gold
      })}
    </LanguageStore.Provider>
  );
}
